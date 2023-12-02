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

// when the player selects a move(start of game)
function playGame(playerMove) {
    const cpusMove = cpuMove();

    var result = '';

    if (playerMove === 'scissors') {
        if (cpusMove === 'rock') {
            result = ('Loser! Get TF outta here 👻')
        } else if (cpusMove === 'paper') {
            result = ('You Win! 👑')
        } else if (cpusMove === 'scissors') {
            result = ('Game Tied 💀')
        }

    } else if (playerMove === 'paper') {
        if (cpusMove === 'rock') {
            result = ('You Win! 👑')
        } else if (cpusMove === 'paper') {
            result = ('Game Tied 💀')
        } else if (cpusMove === 'scissors') {
            result = ('Loser! Get TF outta here 👻')
        }

    } else if (playerMove === 'rock') {
        if (cpusMove === 'rock') {
            result = ('Game Tied 💀')
        } else if (cpusMove === 'paper') {
            result = ('Loser! Get TF outta here 👻')
        } else if (cpusMove === 'scissors') {
            result = ('You Win! 👑')
        }
    }

    document.querySelector('.resultStatus').innerHTML = result;
}
