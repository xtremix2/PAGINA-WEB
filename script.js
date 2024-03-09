// Función para activar el modo oscuro según el estado almacenado en localStorage
function setDarkModeFromLocalStorage() {
    const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeToggle").checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("darkModeToggle").checked = false;
    }
}

// Agrega un listener para cambiar el modo oscuro cuando se hace clic en el interruptor
document.getElementById("darkModeToggle").addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkModeEnabled", "true");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkModeEnabled", "false");
    }
});  // <- Agregué el paréntesis y la llave que faltaban aquí

// Llama a la función para establecer el modo oscuro al cargar la página
setDarkModeFromLocalStorage();

var imagenes = ["Imagenes/parlante.png", "Imagenes/parlante 2.png"];
var indiceImagen = 0;

function cambiarImagen() {
    var boton = document.getElementById("miBoton");
    var imagenBoton = document.getElementById("imagenBoton");

    // Cambia la imagen al siguiente en la lista
    indiceImagen = (indiceImagen + 1) % imagenes.length;
    imagenBoton.src = imagenes[indiceImagen];

    // Alterna la clase "active" al dar clic
    boton.classList.toggle("active");

    // Añade la clase "permanent" para mantener el estado encendido
    setTimeout(function() {
        boton.classList.add("permanent");
    }, 300);
}
