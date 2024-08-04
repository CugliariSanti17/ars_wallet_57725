
const selectOption = document.getElementById('optionsCripto1');
const cantidadPesos = document.getElementById('cantidadPesos');
const convertButton = document.getElementById('convertButton');
const historialPesos = document.getElementById('historialPesos');

function guardarConversionEnLocalStorage(conversion) {
  historialConversiones.push(conversion);
  localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));
}

function guardarConversionPesosACripto(conversion){
  historialArsACripto.push(conversion);
  localStorage.setItem('historialCriptoAPesos', JSON.stringify(historialArsACripto));
}

function mostrarHistorialPesos(conversion){
    const div = document.createElement('div');
    div.classList.add('conversion');
    div.innerHTML += `
      <p>Fecha: ${conversion.fechaConversion}</p>
      <p>N° Conversion: ${conversion.idConversion}</p>
      <p>Tipo: <strong>${conversion.tipo}</strong></p>
      <p class="conversionMonedas">${conversion.cantidadARS} $ARS ⟷ ${conversion.cantidadCripto} ${conversion.moneda} <img class="ms-2" src="${conversion.imagen}" alt="logo ${conversion.moneda}"></p>
    `
    historialPesos.appendChild(div);
}

// Función para cargar y mostrar todas las conversiones $ARS a Cripto desde el localStorage
function mostrarConversionPesosACripto (){
  historialPesos.innerHTML = "";

  historialArsACripto.forEach(conversion => {
    mostrarHistorialPesos(conversion)
  });
}

// Event listener para el boton de convertir
convertButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtencion de valores de criptomonedas
  const monedaElegida = selectOption.value;
  const pesosIngresados = cantidadPesos.value;

  // Validacion de entrada
  if (!pesosIngresados || pesosIngresados <= 0) {
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

  //Conversion a criptomoneda

  fetch(`https://api.coingecko.com/api/v3/coins/${monedaElegida}`)
   .then(response => response.json())
   .then(data => {
      const valorCripto = data.market_data.current_price.ars;
      const cantidadConvertida = convertirARSACripto(pesosIngresados, valorCripto);
      const nombreMoneda = data.name;
      const monedaImg = data.image.small;

      let conversion = new Conversion("$ARS a Cripto", pesosIngresados, cantidadConvertida, nombreMoneda, monedaImg);
      guardarConversionEnLocalStorage(conversion);
      guardarConversionPesosACripto(conversion);
      mostrarConversionPesosACripto();
    });
  
  Swal.fire({
    title: "¡Conversion exitosa!",
    text: "¡La conversion se realizó con éxito!",
    icon: "success",
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
})

if (historialArsACripto.lenght > 5){
  historialArsACripto.shift(historialArsACripto[0])
};

document.addEventListener("DOMContentLoaded", () =>{
  mostrarConversionPesosACripto();
});