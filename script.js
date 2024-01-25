document.addEventListener("DOMContentLoaded", () => {
    const funnyBgm = new Audio('./assets/funny-bgm.mp3');
    funnyBgm.loop = true;
    funnyBgm.volume = 0.6;
    
    const yesBtn = document.querySelector('#yes-btn')
    const noBtn = document.querySelector('#no-btn')
    const heading = document.querySelector('#heading')
    
    
    
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    noBtn.addEventListener('mouseover', () => {
        funnyBgm.play()
        let randomX = Math.random() * 500;
        let randomY = Math.random() * 500;
        console.log(randomX, randomY);
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`
    })
    
    yesBtn.addEventListener('click', () => {
        heading.textContent = 'I love you too <3'
        heading.style.color = 'hotpink';
    })

})