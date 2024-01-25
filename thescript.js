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
        var randomX = Math.random() * 500;
        var randomY = Math.random() * 500;
        console.log(randomX, randomY);
        noBtn.style.transform = "translate(".concat(randomX, "px, ").concat(randomY, "px)");
        noBtn.style.transition = '0.2s transform';
    });
    yesBtn.addEventListener("click", function () {
        heading.textContent = 'I love you too <3';
        heading.style.color = 'hotpink';
    });
});
