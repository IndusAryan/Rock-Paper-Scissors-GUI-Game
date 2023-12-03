document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.theme, .resetScore, .scissors-button, .paper-button, .rock-button');

    function playSound(sound) {
        var audio = new Audio(`assets/${sound}.wav`);
        audio.play();
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var sound = button.dataset.sound;
            playSound(sound);
        });
    });
});
