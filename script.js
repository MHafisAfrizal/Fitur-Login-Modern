document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const registerLink = document.getElementById('registerLink');
    const signupBtn = document.getElementById('signupBtn');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
    
    // Form validation
    function showError(input, message) {
        const formGroup = input.parentElement.parentElement;
        formGroup.classList.add('error');
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (!errorMessage) {
            const errorElement = document.createElement('small');
            errorElement.className = 'error-message';
            errorElement.innerText = message;
            formGroup.appendChild(errorElement);
        } else {
            errorMessage.innerText = message;
            errorMessage.style.display = 'block';
        }
    }
    
    function removeError(input) {
        const formGroup = input.parentElement.parentElement;
        formGroup.classList.remove('error');
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
    }
    
    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Password validation
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Input validation on blur
    emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            removeError(this);
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        if (!validatePassword(this.value)) {
            showError(this, 'Password must be at least 6 characters');
        } else {
            removeError(this);
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate inputs
        let isValid = true;
        
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate API call
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerText = 'Login successful! Redirecting...';
            loginForm.appendChild(successMessage);
            successMessage.style.display = 'block';
            
            // Reset form
            loginForm.reset();
            
            // Redirect after delay (simulation)
            setTimeout(() => {
                alert('Login successful! (This is a demo)');
                successMessage.style.display = 'none';
            }, 1500);
        }
    });
    
    // Register/Signup links
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Registration feature coming soon!');
    });
    
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up feature coming soon!');
    });
});
