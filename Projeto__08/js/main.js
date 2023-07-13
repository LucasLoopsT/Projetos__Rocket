import { Btn } from './buttons.js';
import { hours } from './timer.js';
import Sound from './sound.js'

export const sound = Sound();

export function resetDisplay(minutesRegistered, secondsRegistered){
    hours.minutesDisplay.textContent = minutesRegistered;
    hours.secondsDisplay.textContent = secondsRegistered;
    Btn.open("pause");
}

Btn.play.addEventListener('click', () =>{
    Btn.open("play");
    hours.countdown();
    sound.pressButton();
})

Btn.pause.addEventListener('click', () =>{
    Btn.open("pause");
    sound.pressButton();
})

Btn.watch.addEventListener('click', () =>{
    Btn.open("stop-watch");
    hours.setMyTime();
})

Btn.reset.addEventListener('click', () =>{
    Btn.open("reset");
    sound.pressButton();
})

Btn.soundOn.addEventListener('click', () =>{
    Btn.open("soundOn");
    sound.songBGend();
})

Btn.soundOff.addEventListener('click', () =>{
    Btn.open("soundOff");
    sound.songBGstart();
})