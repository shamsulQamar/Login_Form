document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        document.getElementById('error').textContent = 'Login successful!';
    } else {
        document.getElementById('error').textContent = 'Submit Successfully';
    }
});