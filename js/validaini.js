function validarFormularioini() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar longitud mínima de la contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía
    return true;
}