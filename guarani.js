function verificarTexto() {
    var casillaTexto = document.getElementById('casilla-texto');

    if (casillaTexto) {
        var texto = casillaTexto.value;
        
        // Lógica de verificación
        if (texto === "84gxak") {
            document.getElementById('tabla-container').style.display = 'block'; // Mostrar la tabla
        } else {
            var tabla = document.getElementById('mi-tabla');
            tabla.innerHTML = "<tr><td colspan='2'>El texto ingresado no es correcto.</td></tr>";
            document.getElementById('tabla-container').style.display = 'none'; // Ocultar la tabla si el texto no es correcto
        }
    } else {
        console.error("Elemento 'casilla-texto' no encontrado.");
    }
}