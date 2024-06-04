document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    const errorMessage = document.querySelector('#error-message');
    
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        if (username === "" || password === "") {
            errorMessage.textContent = "Los campos no pueden estar vacíos";
            return;
        }

        // Verificar usuario en la "base de datos" (localStorage)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find((user) => user.username === username);

        if (!existingUser || existingUser.password !== password) {
            errorMessage.textContent = "Nombre de usuario o contraseña incorrectos";
            return;
        }

        // Redirigir al usuario después del login exitoso
        window.location.href = 'peliculas.html';
    });
});
