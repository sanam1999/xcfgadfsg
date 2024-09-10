const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const navBtn = document.getElementById('btn');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

navBtn.addEventListener('click', () => {
    container.classList.remove("active");
    container.classList.add("active");
});


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = signUpForm.name.value.trim();
    const email = signUpForm.email.value.trim();
    const password = signUpForm.password.value;
    const apassword = signUpForm.apassword.value;

    if (!name || !email || !password || !apassword) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== apassword) {
        alert("Passwords do not match.");
        return;
    }

    
    alert("Sign-up successful!");
    signUpForm.submit(); 
});


signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm.email.value.trim();
    const password = signInForm.password.value;

    if (!email || !password) {
        alert("Email and Password are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    
    alert("Sign-in successful!");
    signInForm.submit();
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
