// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Recupera el carrito del localStorage o inicializa un array vacío si no hay carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carritoContainer'); // Contenedor donde se mostrarán los productos
    let precioTotalCarrito = 0; // Variable para acumular el precio total

    // Itera sobre cada producto en el carrito
    carrito.forEach((producto, index) => {
        // Crea un elemento div para cada producto
        const productoElement = document.createElement('div');
        productoElement.style.display = 'flex'; // Estilo para alinear imagen y texto horizontalmente
        productoElement.style.alignItems = 'center'; // Alinear verticalmente
        productoElement.style.marginBottom = '20px'; // Añadir margen inferior
        productoElement.style.marginTop = '20px'; // Añadir margen superior

        // Crear la imagen del producto
        const img = document.createElement('img');
        img.src = producto.imagen; // URL de la imagen del producto
        img.alt = producto.nombre; // Texto alternativo para la imagen
        img.style.width = '100px'; // Ajustar el tamaño de la imagen
        img.style.marginRight = '10px'; // Espacio entre la imagen y el texto

        // Crear el texto del producto
        const textoProducto = document.createElement('span');
        textoProducto.textContent = `${producto.nombre}: ${producto.precio.toFixed(2)} €`; // Mostrar nombre y precio del producto

        // Crear el botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar'; // Texto del botón
        botonEliminar.style.marginLeft = '20px'; // Espacio a la izquierda del botón
        botonEliminar.style.padding = '5px 10px';
        botonEliminar.style.backgroundColor = '#f44336'; // Rojo para eliminar
        botonEliminar.style.color = 'white';
        botonEliminar.style.border = 'none';
        botonEliminar.style.borderRadius = '5px';
        botonEliminar.style.cursor = 'pointer';

        // Función para eliminar el producto
        botonEliminar.addEventListener('click', () => {
            // Eliminar el producto del carrito
            carrito.splice(index, 1); // Eliminar el producto de la lista usando su índice
            localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito en localStorage
            loadCartItems(); // Recargar los productos del carrito en la interfaz
        });

        // Añadir la imagen, el texto y el botón al div del producto
        productoElement.appendChild(img); // Añadir la imagen al div
        productoElement.appendChild(textoProducto); // Añadir el texto al div
        productoElement.appendChild(botonEliminar); // Añadir el botón de eliminar al div

        // Añadir el div del producto al contenedor del carrito
        carritoContainer.appendChild(productoElement);

        // Sumar el precio del producto al total
        precioTotalCarrito += producto.precio;
    });

    // Mostrar el precio total en el elemento correspondiente
    document.getElementById("precioTotalCarrito").innerText = precioTotalCarrito.toFixed(2);

     // Cargar los productos del carrito y mostrar el botón de PayPal
     loadCartItems();

});

// Función para recargar los productos del carrito
function loadCartItems() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carritoContainer');
    carritoContainer.innerHTML = ''; // Limpiar el contenido actual del carrito

    let precioTotalCarrito = 0;

    // Itera sobre cada producto en el carrito
    carrito.forEach((producto, index) => {
        const productoElement = document.createElement('div');
        productoElement.style.display = 'flex';
        productoElement.style.alignItems = 'center';
        productoElement.style.marginBottom = '20px';
        productoElement.style.marginTop = '20px';

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.style.width = '100px';
        img.style.marginRight = '10px';

        const textoProducto = document.createElement('span');
        textoProducto.textContent = `${producto.nombre}: ${producto.precio.toFixed(2)} €`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.marginLeft = '20px';
        botonEliminar.style.padding = '5px 10px';
        botonEliminar.style.backgroundColor = '#f44336';
        botonEliminar.style.color = 'white';
        botonEliminar.style.border = 'none';
        botonEliminar.style.borderRadius = '5px';
        botonEliminar.style.cursor = 'pointer';

        // Función para eliminar el producto
        botonEliminar.addEventListener('click', () => {
            carrito.splice(index, 1); // Eliminar el producto de la lista usando su índice
            localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito en localStorage
            loadCartItems(); // Recargar los productos del carrito en la interfaz
        });

        productoElement.appendChild(img);
        productoElement.appendChild(textoProducto);
        productoElement.appendChild(botonEliminar);
        carritoContainer.appendChild(productoElement);

        precioTotalCarrito += producto.precio; // Acumulando el precio total
    });

    // Mostrar el precio total en el elemento correspondiente
    document.getElementById("precioTotalCarrito").innerText = precioTotalCarrito.toFixed(2);

    // Actualizar el botón de PayPal con el precio actualizado
    renderPayPalButton(precioTotalCarrito);
}

// Función para renderizar el botón de PayPal con el precio actualizado
function renderPayPalButton(precioTotalCarrito) {
    // Limpiar el contenedor de PayPal antes de renderizar
    const paypalButtonContainer = document.getElementById('paypal-button-container');
    paypalButtonContainer.innerHTML = ''; // Limpiar el contenedor de PayPal

    // Crear el botón de PayPal con el precio actualizado
    paypal.Buttons({
        style: {
            color: 'blue',
            label: 'pay'
        },
        createOrder: function(data, actions) {
            // Usar el precio total dinámico del carrito
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: precioTotalCarrito.toFixed(2) // Pasar el precio total del carrito
                    }
                }]
            });
        },

        onCancel: function(data) {
            alert("Pago cancelado");
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Pago realizado con éxito. Gracias, ' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container'); // Renderizar el botón en el contenedor
}

// Añadir evento al botón de checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    localStorage.removeItem('carrito'); // Limpiar el carrito del localStorage
    window.location.href = 'carrito.html'; // Redirigir a la página del carrito
});
