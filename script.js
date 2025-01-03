// script.js

// Referensi elemen
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            alert('Login berhasil!');
        } else {
            alert('Username atau password salah.');
        }
    });
});
