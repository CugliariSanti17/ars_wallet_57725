class Conversion {
    constructor(tipo, cantidadARS, cantidadCripto, moneda, imagen) {
        this.fechaConversion = new Date().toLocaleString();
        this.idConversion = generarId() // Numero de transaccion aleatorio
        this.tipo = tipo; // "ARS a Cripto" o "Cripto a ARS"
        this.cantidadARS = cantidadARS;
        this.cantidadCripto = cantidadCripto;
        this.moneda = moneda;
        this.imagen = imagen;
    }
};

function convertirARSACripto(cantidadPesos, valorCripto) {
    let arsACripto = cantidadPesos / valorCripto;
    arsACripto = Math.round(arsACripto * 100000) / 1000000;
    return arsACripto;
};

function convertirCriptoAARS(cantidadCripto, valorCripto) {
    let criptoAARS = cantidadCripto * valorCripto;
    criptoAARS = Math.round(criptoAARS);
    return criptoAARS;
};

function generarId(){
    let numeroConversion = "";

    for (let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 10);
        numeroConversion += randomNumber;
    }

    return numeroConversion;
};

//const valoresCripto = {
//    1: { nombre: "BTC", valor: 63237532.37, img: "../assets/img/bitcoin.png"},
//    2: { nombre: "ETH", valor: 3360512.73, img: "../assets/img/ethereum.png"},
//  3: { nombre: "DOGE", valor: 134.29, img: "../assets/img/dogecoin.png"},
//    4: { nombre: "USDT", valor: 906.48, img: "../assets/img/usdt.png"},
//    5: { nombre: "TRX", valor: 105.94, img: "../assets/img/tron.png"},
//    6: { nombre: "BNB", valor: 610579.91, img: "../assets/img/bnb.png"},
//};

let historialConversiones = JSON.parse(localStorage.getItem('historialConversiones')) || [];

