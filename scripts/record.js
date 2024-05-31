document.querySelector('form').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        document.getElementById('password').focus();
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
        e.preventDefault();
    }
});
