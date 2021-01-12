let password = document.querySelector("#password");

let eye = document.querySelector("#eye");


let showHidePass = () => {
    if(password.type === "password"){
        password.type = "text";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye")
    }
    else{
        password.type = "password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
    }
}
eye.addEventListener("click", showHidePass)