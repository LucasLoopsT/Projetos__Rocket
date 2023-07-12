export const ErrorAlert = {
    errorMessage: document.querySelector("#error"),

    errorAnimation(){

        function error(){
            ErrorAlert.errorMessage.classList.toggle("open");
            ErrorAlert.errorMessage.classList.remove("animationError");
        }

        function errorOpen(){
            error();
            ErrorAlert.errorMessage.classList.add("animationError");
            setTimeout(error, 3000);
        }

        errorOpen();
    },
}