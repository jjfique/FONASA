const registrar = document.querySelector('#registrar');
// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     registrar.addEventListener('click', mensaje);

}
function mensaje(e) {
    e.preventDefault();
   alert("hoal mundo ")
}
