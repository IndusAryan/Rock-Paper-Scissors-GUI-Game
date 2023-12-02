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