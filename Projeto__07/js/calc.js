export const IMC = {
    calcIMC(weight, height){
         return (weight / ((height / 100)** 2)).toFixed(2); 
        },    
}

import {inputWeight, inputHeight} from './main.js'

export function verificaIMC(){
const result = IMC.calcIMC(inputWeight.value, inputHeight.value);
    let adviceIMC = "";

    if(result <= 16.9){
        adviceIMC = "muito abaixo do peso, precisa ganhar peso, urgente";}
    else if(result <= 18.4){
        adviceIMC = "abaixo do peso, precisa ganhar peso";}
    else if(result <= 24.9){
        adviceIMC = "ótimo, parabéns";}        
    else if(result <= 29.9){
        adviceIMC = "acima do peso, precisa perder alguns quilos";}
    else if(result <= 34.9){
        adviceIMC = "com obesidade de grau 1, precisa de cuidado";}
    else if(result <= 40){
        adviceIMC = "com obesidade de grau 2, precisa de cuidado";}
    else if(result > 40){
        adviceIMC = "com obesidade de grau 3, precisa de um cuidado urgente";}

    return adviceIMC;
}
