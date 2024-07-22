const selectOption = document.getElementById('optionsCripto1');
const cantidadPesos = document.getElementById('cantidadPesos');
const convertButton = document.getElementById('convertButtonCripto');
const conversionMesagge = document.querySelector('.conversionMesagge')

// Event listener para el boton de convertir

convertButtonCripto.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtencion de valores de criptomonedas
    const monedaElegida = selectOption.value;
    const pesosIngresados = cantidadPesos.value;

    // Validacion de entrada
    if (!pesosIngresados || pesosIngresados <= 0) {
        alert('Debe ingresar un monto positivo en pesos.');
        return;
    }

    //Conversion a criptomoneda
    let cantidadConvertida = convertirARSACripto(pesosIngresados, valoresCripto[monedaElegida].valor)
    let conversion = new Conversion("$ARS a Cripto", pesosIngresados, cantidadConvertida, valoresCripto[monedaElegida].nombre);
    historialConversiones.push(conversion);

    conversionMesagge.textContent = "¡La conversion se realizó con éxito!";
    mostrarConversion(conversion);

})
