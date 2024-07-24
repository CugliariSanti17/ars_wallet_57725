function mostrarConversion (conversion){
    const historialConversiones = document.getElementById('historialConversiones');
  
    const div = document.createElement('div');
    div.classList.add('conversion');
    div.innerHTML = `
        <p>Fecha: ${conversion.fechaConversion}</p>
        <p>N° Conversion: ${conversion.idConversion}</p>
        <p>Tipo: <strong>${conversion.tipo}</strong></p>
        <p class="conversionMonedas">${conversion.cantidadARS}$ARS --> ${conversion.cantidadCripto} ${conversion.moneda}</p>
        `
    historialConversiones.appendChild(div);
  };
