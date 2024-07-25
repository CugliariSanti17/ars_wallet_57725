
const filterDropdown = document.getElementById("filtrarDropdown");
const historialContainer = document.getElementById('historialConversiones');

function mostrarConversion (conversion){
    const div = document.createElement('div');
    div.classList.add('conversion');
    div.innerHTML += `
        <p>Fecha: ${conversion.fechaConversion}</p>
        <p>N° Conversion: ${conversion.idConversion}</p>
        <p>Tipo: <strong>${conversion.tipo}</strong></p>
        <p class="conversionMonedas">${conversion.cantidadARS} $ARS ⟷ ${conversion.cantidadCripto} ${conversion.moneda} <img class="ms-2" src="${conversion.imagen}" alt="logo ${conversion.moneda}"></p>
        `
    historialContainer.appendChild(div);
};

// Función para cargar y mostrar todas las conversiones desde el localStorage
function cargarHistorialDeLocalStorage() {
    historialConversiones.forEach(conversion => {
        mostrarConversion(conversion);
    });
}

function filtroConversion(){
    filterDropdown.addEventListener("click", (e) => {
        e.preventDefault();
        
        let selectedFilter = e.target.closest("li").dataset.value;

        // Limpiar el historial antes de filtrar
        historialContainer.innerHTML = '';

        if (selectedFilter === "0"){
            cargarHistorialDeLocalStorage();
        }else{
            let conversionesFiltradas = historialConversiones.filter(conversion => conversion.moneda === valoresCripto[selectedFilter].nombre); // Crea array nuevo con los valore filtrados
            conversionesFiltradas.forEach(conversion => {
                mostrarConversion(conversion);
            });
        }    
    })
}
    

// Limpiar la primer conversion cuando se llega al límite de 10 conversiones
if (historialConversiones.length > 10){
    historialConversiones.shift(historialConversiones[0]);
}

// Cargar el historial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarHistorialDeLocalStorage();
    filtroConversion();

});