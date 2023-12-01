// Logic :

// This is how cpu will pick it's move through basic maths and conditioned outcome
function cpuMove() {

    const chance = Math.random();
    var cpusMove = '';

    if (chance >= 0 && chance < 1 / 3) {
        cpusMove = 'rock';
    } else if (chance >= 1 / 3 && chance < 2 / 3) {
        cpusMove = 'paper';
    } else if (chance >= 2 / 3 && chance < 1) {
        cpusMove = 'scissors';
    }

    return cpusMove;
}

function playGame(playerMove) {
    const cpusMove = cpuMove();

    var result = '';

    if (playerMove === 'scissors') {
        if (cpusMove === 'rock') {
            alert('You lose.');
        } else if (cpusMove === 'paper') {
            alert('You win.');
        } else if (cpusMove === 'scissors') {
            alert('Tie');
        }

    } else if (playerMove === 'paper') {
        if (cpusMove === 'rock') {
            alert('You win.');
        } else if (cpusMove === 'paper') {
            alert('Tie');
        } else if (cpusMove === 'scissors') {
            alert('You lose.');
        }

    } else if (playerMove === 'rock') {
        if (cpusMove === 'rock') {
            alert('Tie');
        } else if (cpusMove === 'paper') {
            alert('You lose.');
        } else if (cpusMove === 'scissors') {
            alert('You win.');
        }
    }
}
