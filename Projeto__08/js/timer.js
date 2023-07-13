import {resetDisplay, sound} from './main.js'
export let timerTimeOut;

export const hours = {
    minutesDisplay: document.querySelector("#minutes"),
    secondsDisplay: document.querySelector("#seconds"),

    setMyTime(){
        let myMinutes = Number(prompt("quantos minutos?"));
        let mySeconds = Number(prompt("quantos segundos?"));

        if(myMinutes < 10){
            myMinutes = "0" + myMinutes;
        }
        if(mySeconds < 10){
            mySeconds = "0" + mySeconds
        }

        minutesRegistered = myMinutes;
        secondsRegistered = mySeconds;

        resetDisplay(minutesRegistered, secondsRegistered);

        if(!myMinutes || !mySeconds){
            resetDisplay("00", "00");
        }
    },

    countdown(){ timerTimeOut = setTimeout( () => {

        let minutes =  Number(hours.minutesDisplay.textContent)
        let seconds =  Number(hours.secondsDisplay.textContent) 

        if( minutes + seconds <= 0){
            resetDisplay(minutesRegistered, secondsRegistered)
            sound.timeEnd();
            if(!minutesRegistered || !secondsRegistered){
                resetDisplay("00", "00");
            }
            return;
        }

        if( seconds <= 0 ){
            seconds = 60;
            hours.minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
        }
        
        hours.secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");;
        hours.countdown();

        }, 1000)
    },
}

export let minutesRegistered = hours.minutesDisplay.textContent;
export let secondsRegistered = hours.secondsDisplay.textContent;