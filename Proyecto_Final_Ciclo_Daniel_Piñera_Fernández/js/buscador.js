// Definición de un objeto que contiene los productos y sus URLs correspondientes
const productos = {  // El Producto "x" redirige a la página "x"
    'aceite': '../productos/aceite-sesamo.html',
    'adelgazante': '../productos/adelgazante.html',
    'alcachofa': '../productos/alcachofa.html',
    'almond': '../productos/almond.html',
    'antiansiedad': '../productos/antiansiedad.html',
    'arbol': '../productos/arbol.html',
    'arroz blanco': '../productos/arroz-blanco.html',
    'aswaghanda': '../productos/aswaghanda.html',
    'aztecas': '../productos/aztecas.html',
    'brain care': '../productos/brain-care.html',
    'castaño': '../productos/caballo.html',
    'cafe proteico': '../productos/cafe-proteico.html',
    'caldo de pollo': '../productos/caldo-pollo.html',
    'calendula': '../productos/calendula.html',
    'caramelo': '../productos/caramelo.html',
    'champu anticaspa': '../productos/champu-anticaspa.html',
    'chips de coco': '../productos/chips-coco.html',
    'coenzima': '../productos/coenzima.html',
    'colageno': '../productos/colageno.html',
    'copos de avena': '../productos/copo-avena.html',
    'crema de arroz': '../productos/crema-arroz.html',
    'crema de cacao': '../productos/crema-cacao.html',
    'crema de coco': '../productos/crema-coco.html',
    'crema de veneno de abeja': '../productos/crema-veneno.html',
    'dong quai': '../productos/dong-quai.html',
    'dormesan': '../productos/dormesan.html',
    'duo stick': '../productos/duo-stiks.html',
    'energreens': '../productos/energreens.html',
    'evoburn': '../productos/evoburn.html',
    'evocakes': '../productos/evocakes.html',
    'evogumy': '../productos/evogumy.html',
    'evokalyn': '../productos/evokalyn.html',
    'evolytes': '../productos/evolytes.html',
    'evomeal': '../productos/evomeal.html',
    'evoripped': '../productos/evoripped.html',
    'flapjack': '../productos/flapjack.html',
    'fresh': '../productos/fresh.html',
    'gel de aloe vera': '../productos/gel-aloe-vera.html',
    'gel de baño': '../productos/gel-bano.html',
    'glucomanano': '../productos/glucomanano.html',
    'harina de coco': '../productos/harina-coco.html',
    'hidratante': '../productos/hidratante.html',
    'husk': '../productos/husk.html',
    'hydrogel': '../productos/hydrogel.html',
    'te ingles': '../productos/ingles.html',
    'te irlandes': '../productos/ingles.html',
    'keto cafe': '../productos/keto-cafe.html',
    'keto matcha': '../productos/keto-matcha.html',
    'lavanda': '../productos/lavanda.html',
    'lentejas': '../productos/lentejas.html',
    'mango': '../productos/mango.html',
    'mantequilla': '../productos/mantequilla.html',
    'multivitaminico': '../productos/multivitaminico.html',
    'nutry bowl': '../productos/nutry-bowl.html',
    'omega 3': '../productos/omega3.html',
    'pack de entrenamiento': '../productos/pack1.html',
    'pack de alimentacion': '../productos/pack2.html',
    'pack energetico': '../productos/pack3.html',
    'pack de chocolate': '../productos/pack4.html',
    'pack para gimnasio': '../productos/pack5.html',
    'pack de bienvenida': '../productos/pack5.html',
    'paleo': '../productos/paleo.html',
    'pan': '../productos/pan.html',
    'piel': '../productos/piel.html',
    'prenatal': '../productos/prenatal.html',
    'preventiva': '../productos/preventiva.html',
    'respibiotic': '../productos/respibiotic.html',
    'salsa de queso': '../productos/salsa-queso.html',
    'salsa de soja': '../productos/SALSA-SOJA.html',
    'te rojo': '../productos/te-rojo.html',
    'triphala': '../productos/triphala.html',
    'vitamina b': '../productos/vitaminab.html',
    
};

// Función para buscar un producto
function buscarProducto() {
    // Obtiene el valor ingresado en el campo de texto, elimina espacios en blanco y lo convierte a minúsculas
    const producto = document.getElementById('producto').value.trim().toLowerCase();
    
    // Verifica si el producto ingresado está en el objeto productos
    if (producto in productos) {
        // Si el producto existe, abre la URL correspondiente en una nueva pestaña
        window.open(productos[producto], '_blank');
    } else {
        // Si el producto no se encuentra, muestra un mensaje de alerta
        alert('Producto no encontrado. Por favor, verifica el nombre.');
    }
}
