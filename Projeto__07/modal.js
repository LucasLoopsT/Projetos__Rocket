export const Modal = {
    modalPopUp: document.querySelector("#modal-container"),
    modalShape: document.querySelector("#modal-card"),
    imcMessage: document.querySelector("h2"),
    btnClose: document.querySelector("#modal-card i"),

    open() { 
        Modal.modalPopUp.classList.add("open") 
        Modal.modalShape.classList.add("animationModal");
    },
    close() { 
        Modal.modalPopUp.classList.remove("open");
        Modal.modalShape.classList.remove("animationModal");}
}
