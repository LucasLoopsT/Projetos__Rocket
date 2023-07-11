const screen = document.querySelector("#screen");
const weight = document.querySelector("#weight-id");
const height = document.querySelector("#height-id");
const btnCalc = screen.querySelector("button");
const modal = document.querySelector("#modal-container");
const modalShape = modal.querySelector("#modal-card");
const imcMessage = modal.querySelector("h2");
const btnClose = modal.querySelector("#modal-card i");
const errorMessage = document.querySelector("#error");

function toggleModal(){
    modal.classList.toggle("open");
    modalShape.classList.toggle("animationModal");
}

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
        toggleModal();
        let imc = calcIMC()
        imcMessage.innerText = `Seu IMC é de ${imc}`
    } else  {
        errorAnimation();
    }

})

btnClose.addEventListener('click', function closeModal(){
    toggleModal();
})

