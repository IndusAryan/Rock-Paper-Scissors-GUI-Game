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
    var moveofcpuImage = document.querySelector('.moveofcpu');
    var moveofplayerImage = document.querySelector('.moveofplayer');

    if (playerMove === 'scissors') {
        if (cpusMove === 'rock') {
            result = ('Looser! 👻');
            moveofcpuImage.src = 'assets/rock.png';
        } else if (cpusMove === 'paper') {
            result = ('You Win! 👑');
            moveofcpuImage.src = 'assets/paper.png';
        } else if (cpusMove === 'scissors') {
            result = ('Game Tied 💀');
            moveofcpuImage.src = 'assets/scissors.png';
        }
        moveofplayerImage.src = 'assets/scissors.png';

    } else if (playerMove === 'paper') {
        if (cpusMove === 'rock') {
            result = ('You Win! 👑');
            moveofcpuImage.src = 'assets/rock.png';
        } else if (cpusMove === 'paper') {
            result = ('Game Tied 💀');
            moveofcpuImage.src = 'assets/paper.png';
        } else if (cpusMove === 'scissors') {
            result = ('Looser! 👻');
            moveofcpuImage.src = 'assets/scissors.png';
        }
        moveofplayerImage.src = 'assets/paper.png';

    } else if (playerMove === 'rock') {
        if (cpusMove === 'rock') {
            result = ('Game Tied 💀');
            moveofcpuImage.src = 'assets/rock.png';
        } else if (cpusMove === 'paper') {
            result = ('Looser! 👻');
            moveofcpuImage.src = 'assets/paper.png';
        } else if (cpusMove === 'scissors') {
            result = ('You Win! 👑');
            moveofcpuImage.src = 'assets/scissors.png';
        }
        moveofplayerImage.src = 'assets/rock.png';
    }

    document.querySelector('.resultStatus').innerHTML = result;

    if (result === 'You Win! 👑') {
        score.wins += 1;
    } else if (result === 'Looser! 👻') {
        score.losses += 1;
    } else if (result === 'Game Tied 💀') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.result').innerHTML = result;
}

function updateScoreElement() {
    document.querySelector('.stats')
        .innerHTML = `Victories: ${score.wins} | Defeats: ${score.losses} | Ties: ${score.ties}`;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();
