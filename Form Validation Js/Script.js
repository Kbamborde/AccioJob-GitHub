const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confirmPassword = document.getElementById("password2");
const heading = document.querySelector('#heading');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "We don't entertain anonymous 😤");
    }
    else {
        setSuccessFor(username);
    }


    if (emailValue === "") {
        setErrorFor(email, "What were you actually thinking? 🙄");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not Valid");
    }
    else{
        setSuccessFor(email);
    }


    if(passwordValue === ""){
        setErrorFor(password, "Dude you forgot me 😭");
    }
    else if(!isPassword(passwordValue)){
        setErrorFor(password, "Password should contain atleat")
    }
    else{
        setSuccessFor(password);
    }


     if(confirmPasswordValue === ""){
        setErrorFor(confirmPassword, "Bro are you serious? 😑");
    }
    else if(confirmPasswordValue != passwordValue){
        setErrorFor(confirmPassword, "Password does not match 🤨");
    }
    else{
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;

    formControl.className = "form-control error"
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
  return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password);
}