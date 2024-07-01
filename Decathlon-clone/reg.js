// Switch to the login form
function showLoginForm() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Switch to the registration form
function showRegistrationForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
}

// Register a new user
function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    if (name && email && password && phone) {
        const user = {
            name: name,
            email: email,
            password: password,
            phone: phone
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registration successful! You can now log in.');
        showLoginForm();
    } else {
        alert('Please fill in all fields.');
    }
}

// Login an existing user
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
window.location.href="decthloan.html"
        alert(`Welcome back, ${user.name}!`);
        // Redirect to another page or show user dashboard
    } else {
        alert('Invalid email or password.');
    }
}
