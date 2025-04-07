import { API_URL } from './base.js'; // Import the API_URL constant

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        id_number: document.getElementById('id_number').value,
        email: document.getElementById('email').value,
        phone_number: document.getElementById('phone_number').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        password: document.getElementById('password').value,
        confirm_password: document.getElementById('confirm_password').value,
    };

    if (formData.password !== formData.confirm_password) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Registration successful!');
            console.log(result);
        } else {
            const error = await response.json();
            alert(`Registration failed: ${error.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});