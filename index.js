let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function playGame(playerMove) {
    const computerMove = pickComputerMove();



    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    playerMoveDisplay(playerMove, computerMove);
    resultDisplay();
    updateScore();

}



function pickComputerMove() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    let computerMove = '';

    if (randomNumber === 1) {
        computerMove = 'rock';
    } else if (randomNumber === 2) {
        computerMove = 'paper';
    } else if (randomNumber === 3) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateScore() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resultDisplay() {
    document.querySelector('.result').innerHTML = `${result}`;
}

function playerMoveDisplay(playerMove, computerMove) {
    document.querySelector('.playermoves').innerHTML = `You <img class="img-icon" src="/images/${playerMove}-emoji.png" alt="scissor"> Computer <img class="img-icon" src="/images/${computerMove}-emoji.png" alt="scissor">`;
}
updateScore();