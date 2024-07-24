
const selectOption = document.getElementById('optionsCripto2');
const cantidadCripto = document.getElementById('cantidadCripto');
const convertButton = document.getElementById('convertButton');
const conversionMesagge = document.querySelector('.conversionMesagge')

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
    let cantidadConvertida = convertirCriptoAARS(criptoIngresada, valoresCripto[monedaElegida].valor)
    let conversion = new Conversion("Cripto a $ARS", cantidadConvertida, criptoIngresada, valoresCripto[monedaElegida].nombre);
    historialConversiones.push(conversion);

    mostrarConversion(conversion);
    Swal.fire({
        title: "¡Conversion exitosa",
        text: "La conversion se realizó con éxito!",
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
    guardarHistorial(historialConversiones);
});