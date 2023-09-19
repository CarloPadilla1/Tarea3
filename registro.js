// Obtener el formulario y sus elementos
const registroForm = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const confirmarContrasenaInput = document.getElementById('confirmar-contrasena');

// Agregar un evento de "submit" al formulario
registroForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener los valores ingresados en el formulario
    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    // Verificar si ya hay datos almacenados en localStorage
    let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Verificar si el nombre de usuario ya existe
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.nombre === nombre);

    if (usuarioExistente) {
        alert('El nombre de usuario ya existe. Por favor, elige otro.');
    } else {
        // Agregar el nuevo usuario a la lista
        usuariosRegistrados.push({ nombre, correo, contrasena });

        // Almacenar la lista actualizada en localStorage
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        alert('Registro exitoso. Puedes iniciar sesión ahora.');

        // Redirigir al usuario a la página index.html
        window.location.href = 'index.html';
    }
});
