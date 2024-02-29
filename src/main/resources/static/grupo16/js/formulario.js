var nombreValido = false,  apellidoValido = false, correoValido = false, semestreValido = false, descripcionValido = false;

function validarNombres(evento) {
    const nombres = evento.target.value;
    const spanError = document.getElementById("mensajesErrorNombre");
    const contadorNombres = document.getElementById("contadorNombre");
    const maxLongitud = 100;

    contadorNombres.textContent = `${nombres.length}/${maxLongitud}`;

    if (nombres.length > maxLongitud) {
        spanError.classList.remove("ocultar");
        nombreValido = false;
    } else {
        spanError.classList.add("ocultar");
        nombreValido = true;
    }
}
document.getElementById("nombres").addEventListener("input", validarNombres);

function validarApellidos(evento) {
    const apellidos = evento.target.value;
    const spanError = document.getElementById("mensajesErrorApellido");
    const contadorApellido = document.getElementById("contadorApellido");
    const maxLongitud = 100;

    contadorApellido.textContent = `${apellidos.length}/${maxLongitud}`;

    if (apellidos.length > maxLongitud) {
        spanError.classList.remove("ocultar");
        apellidoValido = false;
    } else {
        spanError.classList.add("ocultar");
        apellidoValido = true;
    }
}
document.getElementById("apellidos").addEventListener("input", validarApellidos);

function validarCorreos(evento) {
    const correo = evento.target.value;
    const spanError = document.getElementById("mensajesErrorCorreos");
    const regexCorreo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const contadorCorreo = document.getElementById("contadorCorreo");
    const maxLongitud = 100;

    contadorCorreo.textContent = `${correo.length}/${maxLongitud}`;

    if (correo === '') {
        spanError.classList.add("ocultar");
        correoValido = false;
    } else if (correo.length > maxLongitud || !regexCorreo.test(correo)) {
        spanError.classList.remove("ocultar");
        correoValido = false;
    } else {
        spanError.classList.add("ocultar");
        correoValido = true;
    }
}
document.getElementById("correos").addEventListener("input", validarCorreos);

function validarSemestre() {
    const semestreSeleccionado = document.getElementById("semestre").value;
    const spanErrorSemestres = document.getElementById("mensajesErrorSemestres");

    if (semestreSeleccionado === "0") {
        spanErrorSemestres.classList.remove("ocultar");
        semestreValido = false;
    } else {
        spanErrorSemestres.classList.add("ocultar");
        semestreValido = true;
    }
}
document.getElementById("semestre").addEventListener("change", validarSemestre);

function validarDescripcion() {
    const descripcion = document.getElementById("descripcion").value;
    const mensajeErrorDescripcion = document.getElementById("mensajesErrorDescripcion");

    if (descripcion.trim() === '') {
        mensajeErrorDescripcion.classList.remove("ocultar");
        descripcionValido = false;
    } else {
        mensajeErrorDescripcion.classList.add("ocultar");
        descripcionValido = true;
    }
}
document.getElementById("descripcion").addEventListener("input", validarDescripcion);
