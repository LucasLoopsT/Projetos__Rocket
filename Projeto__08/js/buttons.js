import {resetDisplay} from './main.js'
import{timerTimeOut, minutesRegistered, secondsRegistered} from './timer.js';

export const Btn = {
    play: document.querySelector("#time-play"),
    pause: document.querySelector("#time-pause"),
    reset: document.querySelector("#time-reset"),
    watch: document.querySelector("#stop-watch"),
    soundOn: document.querySelector("#sound-on"),
    soundOff: document.querySelector("#sound-off"),

    open(button){
        switch(button){
            case "play": 
                Btn.play.classList.remove("open");
                Btn.watch.classList.remove("open");
                Btn.pause.classList.add("open")
                Btn.reset.classList.add("open");
                
                break;
            case "pause": 
                Btn.pause.classList.remove("open");
                Btn.reset.classList.remove("open");
                Btn.play.classList.add("open")
                Btn.watch.classList.add("open");
                clearTimeout(timerTimeOut);
                break;
   
            case "reset":
                Btn.reset.classList.remove("open");
                Btn.pause.classList.remove("open");
                Btn.watch.classList.add("open");
                Btn.play.classList.add("open");
                resetDisplay(minutesRegistered, secondsRegistered);
                break;

            case "stop-watch":
                Btn.watch.classList.add("animation-clock");
                break; 

            case "soundOn": 
                Btn.soundOn.classList.remove("open");
                Btn.soundOff.classList.add("open")
                break;
            case "soundOff":  
                Btn.soundOff.classList.remove("open");
                Btn.soundOn.classList.add("open")
                break;

            default:
                break;
        }
    },
}

