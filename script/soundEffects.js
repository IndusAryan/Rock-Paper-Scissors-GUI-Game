document.addEventListener('DOMContentLoaded', function() {

    var xButton = document.querySelector('.theme');
    var yButton = document.querySelector('.resetScore');
    var zButton = document.querySelector('.scissors-button');
    var pButton = document.querySelector('.paper-button');
    var rButton = document.querySelector('.rock-button');

    function playSoundMove3() {
        var audio = new Audio('assets/sword.wav');
        audio.play();
    }

    function playSoundMove2() {
        var audio = new Audio('assets/paper.wav');
        audio.play();
    }

    function playSoundMove1() {
        var audio = new Audio('assets/rock.wav');
        audio.play();
    }

    function playSound() {
        var audio = new Audio('assets/themeChange.wav');
        audio.play();
    }

    xButton.addEventListener('click', playSound);
    yButton.addEventListener('click', playSound);
    zButton.addEventListener('click', playSoundMove3);
    pButton.addEventListener('click', playSoundMove2);
    rButton.addEventListener('click', playSoundMove1);
});