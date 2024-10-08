const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){
        alert("Form Submitted Successfully");
    }
});


function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Make a validateConfirmPassword function to validate it







// const submitBtn = document.getElementById('submitBtn');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('confirmPassword');
// const nameError = document.getElementById('nameError');
// const emailError = document.getElementById('emailError');
// const passError = document.getElementById('passError');
// const confirmPassError = document.getElementById('confirmPassError');

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
//         alert("Form Submitted Successfully");
//     }
// });

// function validateName() {
//     const name = nameInput.value.trim();
//     if (name === '') {
//         nameError.innerHTML = "Name is required";
//         nameError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//         nameError.innerHTML = "Write full Name";
//         nameError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     nameError.innerHTML = "";
//     nameError.previousElementSibling.classList.add('fa-check');
//     return true;
// }

// function validateEmail() {
//     const email = emailInput.value.trim();
//     if (email === '') {
//         emailError.innerHTML = "Email is required";
//         emailError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//         emailError.innerHTML = "Enter Valid Email";
//         emailError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     emailError.innerHTML = "";
//     emailError.previousElementSibling.classList.add('fa-check');
//     return true;
// }

// function validatePassword() {
//     const password = passwordInput.value.trim();
//     if (password === '') {
//         passError.innerHTML = "Password is required";
//         passError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
//         passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
//         passError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     passError.innerHTML = "";
//     passError.previousElementSibling.classList.add('fa-check');
//     return true;
// }

// function validateConfirmPassword() {
//     const confirmPassword = document.getElementById('confirmPassword').value.trim();
//     if (confirmPassword === '') {
//         confirmPassError.innerHTML = "Confirm Password is required";
//         confirmPassError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     if (confirmPassword !== passwordInput.value) {
//         confirmPassError.innerHTML = "Passwords do not match";
//         confirmPassError.previousElementSibling.classList.add('fa-xmark');
//         return false;
//     }
//     confirmPassError.innerHTML = "";
//     confirmPassError.previousElementSibling.classList.add('fa-check');
//     return true;
// }