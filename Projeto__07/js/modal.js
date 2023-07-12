export const Modal = {
    modalPopUp: document.querySelector("#modal-container"),
    modalShape: document.querySelector("#modal-card"),
    imcMessage: document.querySelector("h2"),
    advice: document.querySelector("#modal-card p"),
    btnClose: document.querySelector("#modal-card i"),

    open() { 
        Modal.modalPopUp.classList.add("open") 
        Modal.modalShape.classList.add("animationModal");
    },
    close() { 
        Modal.modalPopUp.classList.remove("open");
        Modal.modalShape.classList.remove("animationModal");}
}

Modal.btnClose.addEventListener('click', function closeModal(){
    Modal.close();
})

window.addEventListener('keydown', escKey)

function escKey(event){
    if(event.key === 'Escape'){
        Modal.close();
    }
}