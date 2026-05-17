let users = [];

function registerUser  () {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    const user = {
        username,
        email,
        password
    };

    users.push(user);

    alert('User  registered successfully');

    return false;
}

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful');
        // You can redirect to another page or perform any other action here
        return false;
    } else {
        alert('Invalid username or password');
        return false;
    }
}

function toggleForm() {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const formTitle = document.getElementById('form-title');
    const toggleButton = document.getElementById('toggle-form');

    if (registrationForm.style.display === 'none') {
        registrationForm.style.display = 'block';
        loginForm.style.display = 'none';
        formTitle.textContent = 'Registration Form';
        toggleButton.textContent = 'Login';
    } else {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login Form';
        toggleButton.textContent = 'Register';
    }
}