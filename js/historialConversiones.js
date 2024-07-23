
const filterDropdown = document.getElementById("filtrarDropdown");

filterDropdown.addEventListener("click", () => {
    let selectedFilter = filterDropdown.value;

    let conversionesFiltradas = historialConversiones.filter(conversion => conversion.moneda === valoresCripto[selectedFilter].nombre); // Crea array nuevo con los valore filtrados
    conversionesFiltradas.forEach(conversion => {
        mostrarConversion(conversion);
    });
})

// Limpiar la primer conversion cuando se llega al límite de 10 conversiones
if (historialConversiones.length === 10){
    historialConversiones.shift(historialConversiones[0]);
}

