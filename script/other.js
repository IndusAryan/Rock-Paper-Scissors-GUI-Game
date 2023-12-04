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

document.addEventListener('DOMContentLoaded', function () {
    var themeToggleBtn = document.querySelector('.theme');

    // Store the original background color
    var originalBackgroundColor = getComputedStyle(document.body).backgroundColor;

    themeToggleBtn.addEventListener('click', function () {
        toggleTheme();
    });

    function toggleTheme() {
        // Get the current background color
        var currentColor = document.body.style.backgroundColor;

        // If the current color is not set, use the original color
        if (!currentColor || currentColor === 'rgb(25, 25, 25)' || currentColor === 'transparent') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#f0f0f0';
        } else {
            // Toggle between the original color and the alternative color
            document.body.style.backgroundColor = (currentColor === originalBackgroundColor) ? '#f0f0f0' : originalBackgroundColor;
            document.body.style.color = (currentColor === originalBackgroundColor) ? '#333' : '#f0f0f0';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var animationContainer = document.querySelector('.animation-container');

    function playSounds() {
        var audio = new Audio('assets/begin.wav');
        audio.play();
    }
    // Show the animation
    animationContainer.style.opacity = '1';
    animationContainer.style.pointerEvents = 'wait';
    playSounds();

    // Hide the animation after 2 seconds
    setTimeout(function() {
        animationContainer.style.opacity = '0';
        animationContainer.style.pointerEvents = 'none';
    }, 1000);
});