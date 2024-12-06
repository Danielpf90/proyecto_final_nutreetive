// Manejo del carrito de compras
let precioTotal = 0; // Inicializa el precio total en 0

// Función para agregar productos al carrito
function agregarAlCarrito(precio, nombreProducto, imagenUrl) {
    precioTotal += precio; // Suma el precio del producto al total acumulado
    document.getElementById("precioTotal").innerText = precioTotal.toFixed(2) + " €"; // Actualiza el precio total en la interfaz

    // Recupera el carrito del almacenamiento local o inicializa uno vacío si no existe
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Agrega el nuevo producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precio, imagen: imagenUrl });
    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
// Carrusel de imágenes
let indiceImagen = 0;

function moverCarrusel(direccion) {
    const imagenes = document.querySelectorAll('.carrusel-images img');
    const totalImagenes = imagenes.length;

    // Calculamos el nuevo índice
    indiceImagen += direccion;

    // Si llegamos al final o al inicio, lo redirigimos
    if (indiceImagen >= totalImagenes) {
        indiceImagen = 0;
    } else if (indiceImagen < 0) {
        indiceImagen = totalImagenes - 1;
    }

    // Movemos el carrusel a la imagen correspondiente
    const carrusel = document.querySelector('.carrusel-images');
    carrusel.style.transform = `translateX(${-indiceImagen * 100}%)`;
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
// Función que actualiza el contador para cada producto
function iniciarContador(idContador, diasID, horasID, minutosID, segundosID, tiempoFinal) {
    var contador = document.getElementById(idContador);
    var dias = document.getElementById(diasID);
    var horas = document.getElementById(horasID);
    var minutos = document.getElementById(minutosID);
    var segundos = document.getElementById(segundosID);

    var countdownDate = new Date(tiempoFinal).getTime(); // Fecha final de la oferta

    // Actualiza el contador cada segundo
    var intervalo = setInterval(function() {
        var ahora = new Date().getTime();
        var distancia = countdownDate - ahora;

        // Calcula el tiempo restante
        var d = Math.floor(distancia / (1000 * 60 * 60 * 24)); // Días
        var h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas
        var m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)); // Minutos
        var s = Math.floor((distancia % (1000 * 60)) / 1000); // Segundos

        // Muestra el resultado en los elementos correspondientes
        dias.innerHTML = d < 10 ? "0" + d : d;
        horas.innerHTML = h < 10 ? "0" + h : h;
        minutos.innerHTML = m < 10 ? "0" + m : m;
        segundos.innerHTML = s < 10 ? "0" + s : s;

        // Si el tiempo ha terminado
        if (distancia < 0) {
            clearInterval(intervalo);
            dias.innerHTML = "00";
            horas.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            contador.innerHTML = "¡Oferta Finalizada!";
        }
    }, 1000);
}

// Iniciar contadores para los productos
window.onload = function(){
    iniciarContador("contador1", "dias1", "horas1", "minutos1", "segundos1", "2024-12-10T00:00:00");
    iniciarContador("contador2", "dias2", "horas2", "minutos2", "segundos2", "2024-12-11T00:00:00");
    iniciarContador("contador3", "dias3", "horas3", "minutos3", "segundos3", "2024-12-12T00:00:00");
    iniciarContador("contador4", "dias4", "horas4", "minutos4", "segundos4", "2024-12-09T00:00:00");
};



/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Manejo del popup de suscripción
document.getElementById('subscribirse-button').onclick = function() {
    const emailInput = document.querySelector('input[type="email"]'); // Selecciona el campo de entrada de correo electrónico
    if (validateEmail(emailInput.value)) { // Verifica si el correo ingresado es válido
        document.getElementById('subscripcion-popup').style.display = 'flex'; // Muestra el popup si el correo es válido
        document.getElementById('subscripcion-popup').setAttribute('aria-hidden', 'false'); // Actualiza el atributo ARIA para accesibilidad
    } else {
        alert('Por favor, ingresa un correo electrónico válido.'); // Muestra un aviso si el correo no es válido
    }
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById('subscripcion-popup').style.display = 'none'; // Oculta el popup
    document.getElementById('subscripcion-popup').setAttribute('aria-hidden', 'true'); // Actualiza el atributo ARIA
}

// Cierra el popup al hacer clic en el botón de cerrar
document.getElementById('cerrar-popup').onclick = function() {
    closePopup(); // Llama a la función para cerrar el popup
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
    return regex.test(email); // Devuelve true si el correo es válido, false en caso contrario
}
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
// Función para manejar las pestañas de los productos de información
function mostrarContenido(opcion) {
    // Ocultar todos los contenidos
    var contenido1 = document.getElementById("contenido-opcion1");
    var contenido2 = document.getElementById("contenido-opcion2");

    var tabs = document.querySelectorAll('.tab-button');
    var contenidoTabs = document.querySelectorAll('.contenido-tab');

    // Remover la clase "activo" de todos los contenidos y botones
    contenidoTabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Mostrar el contenido seleccionado
    if (opcion === 'opcion1') {
        contenido1.classList.add('active');
        document.querySelector('.tab-button:nth-child(1)').classList.add('active');
    } else if (opcion === 'opcion2') {
        contenido2.classList.add('active');
        document.querySelector('.tab-button:nth-child(2)').classList.add('active');
    }
}


