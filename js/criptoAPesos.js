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
    if (!cantidadIngresada || cantidadIngresada <= 0) {
        alert('Debe ingresar una cantidad positiva.');
        return;
    }

    // Conversion a pesos
    let cantidadConvertida = convertirCriptoAARS(criptoIngresada, valoresCripto[monedaElegida].valor)
    let conversion = new Conversion("Cripto a $ARS", cantidadConvertida, criptoIngresada, valoresCripto[monedaElegida].nombre);
    historialConversiones.push(conversion);

    mostrarConversion(conversion);
    conversionMesagge.textContent = "¡La conversion se realizó con éxito!";
    guardarHistorial(historialConversiones);
});