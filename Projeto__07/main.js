import { Modal } from './modal.js'

const screen = document.querySelector("#screen");
const weight = document.querySelector("#weight-id");
const height = document.querySelector("#height-id");
const btnCalc = screen.querySelector("button");
const errorMessage = document.querySelector("#error");

function errorAnimation(){

    function error(){
        errorMessage.classList.toggle("open");
        errorMessage.classList.remove("animationError");
    }

    function errorOpen(){
        error();
        errorMessage.classList.add("animationError");
        setTimeout(error, 3000);
    }

    errorOpen();
}

function calcIMC(){
    return (weight.value / ((height.value / 100)** 2)).toFixed(2); 
}

btnCalc.addEventListener('click', function calculate(event){
    event.preventDefault();
    
    if(weight.value != '' && height.value != ''){
        Modal.open();
        let imc = calcIMC()
        Modal.imcMessage.innerText = `Seu IMC é de ${imc}`
    } else  {
        errorAnimation();
    }

})

Modal.btnClose.addEventListener('click', function closeModal(){
    Modal.close();
})

window.addEventListener('keydown', escKey)

function escKey(event){
    if(event.key === 'Escape'){
        Modal.close();
    }
}
