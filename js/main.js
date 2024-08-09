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

let historialConversiones = JSON.parse(localStorage.getItem('historialConversiones')) || [];
let historialArsACripto = JSON.parse(localStorage.getItem('historialPesosACripto')) || [];;
let historialCriptoAArs = JSON.parse(localStorage.getItem('historialCriptoAPesos')) || [];



