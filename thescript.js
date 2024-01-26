"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    var funnyBgm = new Audio('./assets/funny-bgm.mp3');
    funnyBgm.loop = true;
    funnyBgm.volume = 0.6;
    var buttons = document.querySelectorAll('button');
    var yesBtn = document.querySelector('#yes-btn');
    var noBtn = document.querySelector('#no-btn');
    var heading = document.querySelector('#heading');
    var letMeThinkDiv = document.querySelector('#let-me-think-div');
    letMeThinkDiv.addEventListener('click', function () {
        letMeThinkDiv.style.display = 'none';
        var buttonArray = Array.from(buttons);
        buttonArray.forEach(function (button) { return (button.style.display = 'inline-block'); });
    });
    noBtn.addEventListener('mouseover', function () {
        funnyBgm.play();
        randomizeNoBtnLocation();
    });
    yesBtn.addEventListener("click", function () {
        heading.textContent = 'Também te amo <3';
        heading.style.color = 'hotpink';
    });
    function randomizeNoBtnLocation() {
        var randomX = Math.floor(Math.random() * 500) + 1;
        var randomY = Math.floor(Math.random() * 500) + 1;
        console.log(randomX, randomY);
        noBtn.style.transform = "translate(".concat(randomX, "px, ").concat(randomY, "px)");
        noBtn.style.transition = '0.2s transform';
    }
});
