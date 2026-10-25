// Get DOM elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Toggle between Sign Up and Sign In
signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

// Add floating animation to inputs on focus
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Optional: Form validation and submission handling
const forms = document.querySelectorAll('form');

forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Signup form
        if (index === 0) {
            const passwordInput =
                form.querySelector('input[type="password"]');

            const messageBox =
                document.getElementById('formMessage');

            if (!passwordInput || !messageBox) return;

            const password = passwordInput.value;
            const errors = [];

            if (password.length < 8)
                errors.push('At least 8 characters');

            if (!/[A-Z]/.test(password))
                errors.push('At least 1 capital letter (A-Z)');

            if (!/[a-z]/.test(password))
                errors.push('At least 1 small letter (a-z)');

            if (!/[0-9]/.test(password))
                errors.push('At least 1 number (0-9)');

            if (!/[^A-Za-z0-9]/.test(password))
                errors.push('At least 1 special character');

            messageBox.replaceChildren();
            messageBox.hidden = false;

            if (errors.length > 0) {
                messageBox.className = 'form-message error';

                const title = document.createElement('strong');
                title.textContent = 'Please fix your password:';

                const list = document.createElement('ul');

                errors.forEach(error => {
                    const item = document.createElement('li');
                    item.textContent = error;
                    list.appendChild(item);
                });

                messageBox.append(title, list);
                return;
            }

            messageBox.className = 'form-message success';
            messageBox.textContent = '✓ Form submitted successfully!';
            messageBox.hidden = false;
        }

        
else {
    const loginMessage =
        document.getElementById('loginMessage');

    if (loginMessage) {
        loginMessage.className = 'form-message success';
        loginMessage.textContent =
            '✓ Sign In form submitted successfully!';
        loginMessage.hidden = false;
    }
}

        // Show success message
        if (index === 0) {
            const messageBox =
                document.getElementById('formMessage');

            if (messageBox) {
                messageBox.textContent =
                    '✓ Form submitted successfully!';

                messageBox.classList.add('success');
                messageBox.hidden = false;
            }
        };



// Add ripple effect to buttons
const buttons = document.querySelectorAll('button, .social-btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}); })
})

