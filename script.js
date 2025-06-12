// Hardcoded credentials
const VALID_CREDENTIALS = {
    username: "employee",
    password: "1234"
};

// Login form functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            // Add a smooth transition effect
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = 'sop.html';
            }, 300);
        } else {
            // Show error with animation
            const button = loginForm.querySelector('button');
            button.style.backgroundColor = '#dc3545';
            button.innerHTML = '<i class="fas fa-times"></i> Invalid Credentials';
            
            setTimeout(() => {
                button.style.backgroundColor = '#1a73e8';
                button.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            }, 2000);
        }
    });
}

// Toggle button functionality
const toggleButton = document.getElementById('toggleList');
const sopList = document.getElementById('sopList');

if (toggleButton && sopList) {
    toggleButton.addEventListener('click', function() {
        sopList.classList.toggle('active');
    });
}

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        // Add a smooth transition effect
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 300);
    });
}

// Add page transition effects
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
}); 