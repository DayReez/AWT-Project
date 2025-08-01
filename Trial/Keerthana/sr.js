const passwordInput = document.getElementById("password");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const special = document.getElementById("special");
const length = document.getElementById("length");
const email=document.getElementById("email");
const emailError = document.getElementById("email-error");
email.addEventListener("input",function(){
    const value=email.value.trim();
    if (value === "") {
    emailError.textContent = "Email is a required field";
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    emailError.textContent = "Email must be a valid email";
    }
    else {
    emailError.textContent = ""; 
    }
});
passwordInput.addEventListener("input", function () {
      const value = passwordInput.value;
      uppercase.className = /[A-Z]/.test(value) ? "valid" : "invalid";
      lowercase.className = /[a-z]/.test(value) ? "valid" : "invalid";
      number.className = /[0-9]/.test(value) ? "valid" : "invalid";
      special.className = /[!@#\$%\^&\*\?\>\<]/.test(value) ? "valid" : "invalid";
      length.className = value.length >= 8 ? "valid" : "invalid";
});