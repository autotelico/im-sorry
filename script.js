document.addEventListener("DOMContentLoaded", () => {
    const funnyBgm = new Audio('./assets/funny-bgm.mp3');
    funnyBgm.loop = true;
    funnyBgm.volume = 0.6;
    
    const buttons = document.querySelectorAll('button')
    const yesBtn = document.querySelector('#yes-btn')
    const noBtn = document.querySelector('#no-btn')
    const heading = document.querySelector('#heading')
    const letMeThinkDiv = document.querySelector('#let-me-think-div')
    
    letMeThinkDiv.addEventListener('click', () => {
        letMeThinkDiv.style.display = 'none';
        buttons.forEach(button => button.style.display = 'inline-block')
    })
    
    noBtn.addEventListener('mouseover', () => {
        funnyBgm.play()
        let randomX = Math.random() * 500;
        let randomY = Math.random() * 500;
        console.log(randomX, randomY);
        noBtn.style.transition = '0.2s all';
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`
    })
    
    yesBtn.addEventListener('click', () => {
        heading.textContent = 'I love you too <3'
        heading.style.color = 'hotpink';
    })

})