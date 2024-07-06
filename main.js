class Conversion {
    constructor(tipo, cantidadARS, cantidadCripto, moneda) {
        this.idConversion = generarId() // Numero de transaccion
        this.tipo = tipo; // "ARS a Cripto" o "Cripto a ARS"
        this.cantidadARS = cantidadARS;
        this.cantidadCripto = cantidadCripto;
        this.moneda = moneda;
    }
}

function convertirARSACripto(cantidadPesos, valorCripto) {
    return cantidadPesos / valorCripto;
}

function convertirCriptoAARS(cantidadCripto, valorCripto) {
    return cantidadCripto * valorCripto;
}

function validarOpcion(opcion) {
    while (isNaN(opcion)) {
        alert("Ingrese una cantidad válida");
        opcion = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS | 3. Ver últimas conversiones"));
    }
}

function validarPesos(pesos){
    while (isNaN(pesos)){
        alert("Ingrese una cantidad válida en pesos")
        pesos = Number(prompt("Ingrese la cantidad de pesos a convertir: $"))
    }
}

function validarCripto(cripto){
    while (isNaN(cripto)){
        alert("Ingrese una cantidad válida en cripto")
        cripto = Number(prompt("Ingrese la cantidad de cripto a convertir: "))
    }
}

function generarId(){
    let numeroConversion = "";

    for (let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 10);
        numeroConversion += randomNumber;
    }

    return numeroConversion;
}

const valoresCripto = {
    1: { nombre: "BTC", valor: 63237532.37 },
    2: { nombre: "ETH", valor: 3360512.73 },
    3: { nombre: "DOGE", valor: 134.29 },
    4: { nombre: "USDT", valor: 906.48 },
    5: { nombre: "TRX", valor: 105.94 },
    6: { nombre: "BNB", valor: 610579.91 }
};

let historialConversiones = [];
let volverMenu = false;

alert("Bienvenido a ARS-WALLET, tu billetera virtual")

do {
    let opcionPrincipal = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS | 3. Ver ultimas conversiones | 4. Filtrar conversiones "));
    validarOpcion (opcionPrincipal)

    while (opcionPrincipal !== 1 && (opcionPrincipal !== 2 && opcionPrincipal !== 3 && opcionPrincipal !== 4)){
        alert("Ingrese una opción válida")
        opcionPrincipal = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS | 3. Ver ultimas conversiones | 4. Filtrar conversiones "));
    }

    switch (opcionPrincipal){
        case 1:
            alert("Elige la moneda a la que desea convertir sus $ARS");
            let opcionElegida1 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB"));
            validarOpcion(opcionElegida1)
            let pesosIngresados = Number(prompt("Ingrese la cantidad de pesos a convertir: $"));
            validarPesos(pesosIngresados)

            if (valoresCripto[opcionElegida1]){
                let cantidadConvertida = convertirARSACripto(pesosIngresados, valoresCripto[opcionElegida1].valor);
                let conversion = new Conversion("$ARS a Cripto", pesosIngresados, cantidadConvertida, valoresCripto[opcionElegida1].nombre);
                historialConversiones.push(conversion);
                alert(`La conversión se realizó con éxito. La cantidad de ${valoresCripto[opcionElegida1].nombre} que obtuvo es: ${cantidadConvertida}`);
            }else{
                alert("La opción elegida no es válida. Ingrese una opción del 1 al 6.");
            }
            break;
        case 2:
            alert("Elija la moneda virtual para convertir a $ARS");
            let opcionElegida2 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB"));
            validarOpcion(opcionElegida2)
            let criptoIngresada = Number(prompt(`Ingrese la cantidad de ${valoresCripto[opcionElegida2].nombre} que desea convertir a $ARS:`));
            validarCripto(criptoIngresada)

            if (valoresCripto[opcionElegida2]) {
                cantidadConvertida = convertirCriptoAARS(criptoIngresada, valoresCripto[opcionElegida2].valor);
                let conversion = new Conversion("Cripto a $ARS", cantidadConvertida, criptoIngresada, valoresCripto[opcionElegida2].nombre);
                historialConversiones.push(conversion);
                alert(`La conversión se realizó con éxito. La cantidad de $ARS que obtuvo es: $${cantidadConvertida}`);
            }else{
                alert("La opción elegida no es válida. Ingrese una opción del 1 al 6.");
            }
            break;
        case 3:
            alert("Historial de conversiones: \n")
            ultimasConversiones = historialConversiones.forEach(conversion => {
                alert(`N° de conversion: ${conversion.idConversion} - ${conversion.tipo}: ${conversion.cantidadARS} $ARS <-> ${conversion.cantidadCripto} ${conversion.moneda}`);
            });
            // Limpiar historial cuando se llega a su límite de 10 conversiones
            if (historialConversiones.length === 10){
                historialConversiones.shift(historialConversiones[0]);
            }
            break;
        case 4:
            alert("Elige la moneda para filtrar sus conversiones: ")
            let opcionFiltrar = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB"));
            validarOpcion(opcionFiltrar)

            if (valoresCripto[opcionFiltrar]){
                if (historialConversiones.length === 0){
                    alert("El historial de conversiones está vacío.");
                }else{
                    let conversionesFiltradas = historialConversiones.filter(conversion => conversion.moneda === valoresCripto[opcionFiltrar].nombre);
                    if (conversionesFiltradas.length === 0){
                        alert("No hay conversiones de este tipo");
                    }else{
                        alert(`Conversiones de ${valoresCripto[opcionFiltrar].nombre}:`)
                        conversionesFiltradas.forEach(conversion => {
                            alert(`N° de conversion: ${conversion.idConversion} - ${conversion.tipo}: ${conversion.cantidadARS} $ARS <-> ${conversion.cantidadCripto} ${conversion.moneda}`);
                        });
                    }
                }
            }else{
                alert("La opción elegida no es válida. Ingrese una opción del 1 al 6.");
            }
            break;
        default:
            alert("Ingrese una opcion del 1 al 4")
    }

    volverMenu = confirm("¿Desea volver al menú de opciones?");
 
} while (volverMenu);

alert("¡Gracias por utilizar ARS-WALLET, hasta pronto!");


