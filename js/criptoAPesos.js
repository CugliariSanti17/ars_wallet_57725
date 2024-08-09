
const selectOption = document.getElementById('optionsCripto2');
const cantidadCripto = document.getElementById('cantidadCripto');
const convertButton = document.getElementById('convertButton');
const historialCripto = document.getElementById('historialCripto');

function guardarConversionEnLocalStorage(conversion) {
  historialConversiones.push(conversion);
  localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));
}

function guardarConversionesCriptoAPesos(conversion){
  historialCriptoAArs.push(conversion);
  localStorage.setItem('historialCriptoAPesos', JSON.stringify(historialCriptoAArs));
}

function mostrarHistorialCripto(conversion){
  const div = document.createElement('div');
  div.classList.add('conversion');
  div.innerHTML += `
    <p>Fecha: ${conversion.fechaConversion}</p>
    <p>N° Conversion: ${conversion.idConversion}</p>
    <p>Tipo: <strong>${conversion.tipo}</strong></p>
    <p class="conversionMonedas">${conversion.cantidadARS} $ARS ⟷ ${conversion.cantidadCripto} ${conversion.moneda} <img class="ms-2" src="${conversion.imagen}" alt="logo ${conversion.moneda}"></p>
  `
  historialCripto.appendChild(div);
}

function mostrarConversionCriptoAPesos (){
  historialCripto.innerHTML = "";

  historialCriptoAArs.forEach(conversion => {
    mostrarHistorialCripto(conversion)
  });
}

// Event listener para el boton de convertir
convertButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtencion de valores de criptomonedas
  const monedaElegida = selectOption.value;
  const criptoIngresada = cantidadCripto.value;

  // Validacion de entrada
  if (!criptoIngresada || criptoIngresada <= 0) {
    Swal.fire({
      title: "Error",
      text: "Debe ingresar una cantidad positiva.",
      icon: "error",
      confirmButtonText: "Aceptar",
      showConfirmButton: true,
      showCancelButton: false,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    return;
  }

  // Conversion a pesos

  fetch(`https://api.coingecko.com/api/v3/coins/${monedaElegida}`)
   .then(response => response.json())
   .then(data => {
      const valorCripto = data.market_data.current_price.ars
      const cantidadConvertida = convertirCriptoAARS(criptoIngresada, valorCripto);
      const nombreMoneda = data.name;
      const monedaImg = data.image.small;

      let conversion = new Conversion("Cripto a $ARS", cantidadConvertida, criptoIngresada, nombreMoneda, monedaImg);
      guardarConversionEnLocalStorage(conversion);
      guardarConversionesCriptoAPesos(conversion);
      mostrarConversionCriptoAPesos();
    });

  Swal.fire({
    title: "¡Conversión exitosa",
    text: "La conversión se realizó con éxito! Consultá tus conversiones en la pestaña de Historial",
    icon: "success",
    confirmButtonText: "Aceptar",
    showConfirmButton: true,
    showCancelButton: false,
    customClass: {
      confirmButton: "botonConfirmacion",
    },
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
});

if (historialCriptoAArs.length > 5){
  historialCriptoAArs.shift()
};

document.addEventListener("DOMContentLoaded", () =>{
  mostrarConversionCriptoAPesos()
});