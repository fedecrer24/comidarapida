function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    // Validar campos de nombre y apellido
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }
    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Validar aceptación de términos y condiciones
    if (!terms) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía
    return true;
}