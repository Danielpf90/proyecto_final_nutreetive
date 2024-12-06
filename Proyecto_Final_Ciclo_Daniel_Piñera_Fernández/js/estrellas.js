// Manejo de las estrellas de opinión
document.querySelectorAll('.estrellas').forEach(stars => {
    stars.addEventListener('click', (event) => {
        // Verifica si se ha hecho clic en una estrella
        if (event.target.classList.contains('estrella')) {
            const selectedValue = Array.from(stars.children).indexOf(event.target) + 1; // Obtiene el valor seleccionado
            const starElements = stars.querySelectorAll('.estrella'); // Selecciona todas las estrellas

            // Actualiza las estrellas
            starElements.forEach((star, index) => {
                if (index < selectedValue) {
                    star.classList.add('active'); // Activa la estrella si está seleccionada
                } else {
                    star.classList.remove('active'); // Desactiva la estrella si no está seleccionada
                }
            });
        }
    });
});