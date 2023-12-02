// To open urls
function openURL(url) {
    window.open(url, '_blank');
}

// my git profile
document.addEventListener('DOMContentLoaded', function() {
    var openUrlButton = document.querySelector('.brand');

    openUrlButton.addEventListener('click', function () {
        openURL('https://github.com/IndusAryan');
    })
})

// github repo of this game
document.addEventListener('DOMContentLoaded', function() {
    var openUrlButton = document.querySelector('.githubico');

    openUrlButton.addEventListener('click', function () {
        openURL('https://github.com/IndusAryan/Rock-Paper-Scissors-GUI-Game');
    })
})

function refreshScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

document.querySelector(".resetScore").addEventListener("click", refreshScore);

document.querySelector(".exit").addEventListener("click", close());