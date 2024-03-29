import { log } from 'console';

document.addEventListener('DOMContentLoaded', () => {
  const funnyBgm: HTMLAudioElement = new Audio('./assets/funny-bgm.mp3');
  funnyBgm.loop = true;
  funnyBgm.volume = 0.6;

  const buttons: NodeList = document.querySelectorAll('button')!;
  const yesBtn: HTMLButtonElement = document.querySelector('#yes-btn')!;
  const noBtn: HTMLButtonElement = document.querySelector('#no-btn')!;
  const heading: HTMLHeadingElement = document.querySelector('#heading')!;
  const letMeThinkDiv: HTMLDivElement =
    document.querySelector('#let-me-think-div')!;

  letMeThinkDiv.addEventListener('click', () => {
    letMeThinkDiv.style.display = 'none';

    const buttonArray: HTMLButtonElement[] = Array.from(
      buttons
    ) as HTMLButtonElement[];
    buttonArray.forEach((button) => (button.style.display = 'inline-block'));
  });

  noBtn.addEventListener('mouseover', () => {
    funnyBgm.play();
    randomizeNoBtnLocation();
  });

  yesBtn.addEventListener("click", () => {
    heading.textContent = 'Também te amo <3';
    heading.style.color = 'hotpink';
  })

  function randomizeNoBtnLocation() {
    let randomX: number = Math.floor(Math.random() * 500) + 1;
    let randomY: number = Math.floor(Math.random() * 500) + 1;
    console.log(randomX, randomY);
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noBtn.style.transition = '0.2s transform'
  }
});
