import { Modal } from "./modal.js";
import { ErrorAlert } from "./error-alert.js";
import { IMC, verificaIMC } from './calc.js';

export const inputWeight = document.querySelector("#weight-id");
export const inputHeight = document.querySelector("#height-id");
const btnCalc = document.querySelector("#screen button");

btnCalc.addEventListener('click', function calculate(event){
    event.preventDefault();
    
    if(inputWeight.value != '' && inputHeight.value != ''){
        Modal.open();
        Modal.imcMessage.innerText = `Seu IMC é de ${IMC.calcIMC(inputWeight.value, inputHeight.value)}!`
        Modal.advice.innerText = `Você está ${verificaIMC()}!`
    } else  {
        ErrorAlert.errorAnimation();
    }
})