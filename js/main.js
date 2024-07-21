class Conversion {
    constructor(tipo, cantidadARS, cantidadCripto, moneda) {
        this.idConversion = generarId() // Numero de transaccion aleatorio
        this.tipo = tipo; // "ARS a Cripto" o "Cripto a ARS"
        this.cantidadARS = cantidadARS;
        this.cantidadCripto = cantidadCripto;
        this.moneda = moneda;
    }
}

function convertirARSACripto(cantidadPesos, valorCripto) {
    let arsACripto = cantidadPesos / valorCripto;
    let dosDecimales = arsACripto.toFixed(5);
    return parseFloat(dosDecimales);

}

function convertirCriptoAARS(cantidadCripto, valorCripto) {
    let criptoAARS = cantidadCripto * valorCripto;
    let dosDecimales = criptoAARS.toFixed(5);
    return parseFloat(dosDecimales);
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

function mostrarConversion (conversion){
    const historialConversiones = document.getElementById('historialConversiones');

    const div = document.createElement('div');
    div.className = 'conversion';
    div.innerHTML += `
        <p>Id: ${conversion.idConversion}</p>
        <p>Tipo: ${conversion.tipo}</p>
        <p>Moneda: ${conversion.moneda}</p>
        <p>Cantidad en ${conversion.moneda}: ${conversion.cantidadARS} ARS</p>
        `
    historialConversiones.appendChild(div);
}