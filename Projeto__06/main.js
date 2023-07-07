const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const playButton = document.querySelector("#playButton")
let tentativas = 1;

function randomNum(){
    return Math.round(Math.random() * 10);
}

function toggle(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function confere(event){
    event.preventDefault();

    const numGuess = document.querySelector("#numGuess");
    
    if(Number(numGuess.value) == numberX){
        document.querySelector("#screen2 h2").innerText = `Acertou em ${tentativas} tentativas!`;
        toggle();
        alert('Ganhou, bichim inteligente!')
        tentativas++
    }else if(Number(numGuess.value) > 10){
        alert("Insira um número válido!")
    }else{
        tentativas++
        alert('Errou, bichim burro!')
    }
}

playButton.addEventListener('click', function playAgain(){
    randomNum();
    numberX = randomNum();
    tentativas = 1;
    toggle();
})

numberX = randomNum();