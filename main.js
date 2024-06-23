function convertirArsBTC(cantidadPesos, valorBTC){
    let btcConvertido = cantidadPesos * valorBTC
    return btcConvertido
}

function convertirArsETH(cantidadPesos, valorETH){
    let ethConvertido = cantidadPesos * valorETH
    return ethConvertido
}

function convertirArsDOGE(cantidadPesos, valorDOGE){
    let dogeConvertido = cantidadPesos * valorDOGE
    return dogeConvertido
}

function convertirArsUSDT(cantidadPesos, valorUSDT){
    let usdtConvertido = cantidadPesos * valorUSDT
    return usdtConvertido
}

function convertirArsTRX(cantidadPesos, valorTRX){
    let trxConvertido = cantidadPesos * valorTRX
    return trxConvertido
}

function convertirArsBNB(cantidadPesos, valorBNB){
    let bnbConvertido = cantidadPesos * valorBNB
    return bnbConvertido
}

function convertirCriptoBTC(pesosIngresados, valorBTC){
    let cantidadBTC = pesosIngresados / valorBTC
    return cantidadBTC
}

function convertirCriptoETH(pesosIngresados, valorETH){
    let cantidadETH = pesosIngresados / valorETH
    return cantidadETH
}

function convertirCriptoDOGE(pesosIngresados, valorDOGE){
    let cantidadDOGE = pesosIngresados / valorDOGE
    return cantidadDOGE
}

function convertirCriptoUSDT(pesosIngresados, valorUSDT){
    let cantidadUSDT = pesosIngresados / valorUSDT
    return cantidadUSDT
}

function convertirCriptoTRX(pesosIngresados, valorTRX){
    let cantidadTRX = pesosIngresados / valorTRX
    return cantidadTRX
}

function convertirCriptoBNB(pesosIngresados, valorBNB){
    let cantidadBNB = pesosIngresados / valorBNB
    return cantidadBNB
}

let valorBitcoin = 63237532.37
let valorEthereum = 3360512.73
let valorDogecoin = 134.29
let valorTether = 906.48
let valorTrx = 105.94
let valorBinance = 610579.91

let seguirConvirtiendo = false

alert("Bienvenidos a ARS-WALLET, tu billetera virtual de confianza ")
let opcionPrincipal = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS"))

while (opcionPrincipal !== 1 && opcionPrincipal !== 2){
    alert("Ingrese una opción válida")
    opcionPrincipal = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS"))
}

while (isNaN(opcionPrincipal)){
    alert("Ingrese una opción válida")
    opcionPrincipal = parseInt(prompt("1. Convertir $ARS a moneda virtual | 2. Convertir moneda virtual a $ARS"))
}

if (opcionPrincipal === 1){
    do {
        alert("Elige la moneda a la que desea convertir sus $ARS")
        let opcionElegida1 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB: "))
        let pesosIngresados = Number(prompt("Ingrese la cantidad de pesos a convertir: $"))
        while (isNaN(pesosIngresados)){
            alert("Ingrese una opción válida")
            pesosIngresados = Number(prompt("Ingrese la cantidad de pesos a convertir: $"))
        }
        switch (opcionElegida1){
            case 1:
                alert("La conversión se realizo con éxito")
                alert("La cantidad de BITCOIN que obtuvo es: " + convertirCriptoBTC(pesosIngresados, valorBitcoin))
                break
            case 2:
                alert("La conversión se realizo con éxito")
                alert("La cantidad de ETHEREUM que obtuvo es: " + convertirCriptoETH(pesosIngresados, valorEthereum))
                break
            case 3:
                
                alert("La conversión se realizo con éxito")
                alert("La cantidad de DOGECOIN que obtuvo es: " + convertirCriptoDOGE(pesosIngresados, valorDogecoin))
                break
            case 4:
                alert("La conversión se realizo con éxito")
                alert("La cantidad de TETHER (USDT) que obtuvo es: " + convertirCriptoUSDT(pesosIngresados, valorTether))
                break
            case 5:
                alert("La conversión se realizo con éxito")
                alert("La cantidad de USDC que obtuvo es: " + convertirCriptoTRX(pesosIngresados, valorTrx))
                break
            case 6:
                alert("La conversión se realizo con éxito")
                alert("La cantidad de BNB que obtuvo es: " + convertirCriptoBNB(pesosIngresados, valorBinance))
                break
            default:
                alert("La opción elegida no es valida. Ingrese una opcion del 1 al 6.")
        }
        seguirConvirtiendo = confirm("¿Desea seguir convirtiendo?")
    } while (seguirConvirtiendo);
}

if (opcionPrincipal === 2){
        do {
            alert("Elija la moneda virtual para convertir a $ARS")  
            let opcionElegida2 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB: "))

            switch (opcionElegida2){
                case 1:
                    let bitcoinIngresado = Number(prompt("Ingrese la cantidad de BTC que desea convertir a $ARS: "))
                    while (isNaN(bitcoinIngresado)){
                        alert("Ingrese una cantidad válida")
                        bitcoinIngresado = Number(prompt("Ingrese la cantidad de BTC que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsBTC(bitcoinIngresado, valorBitcoin))
                    break
                case 2:
                    let ethereumIngresado = Number(prompt("Ingrese la cantidad de ETH que desea convertir a $ARS: "))
                    while(isNaN(ethereumIngresado)){
                        alert("Ingrese una cantidad válida")
                        ethereumIngresado = Number(prompt("Ingrese la cantidad de ETH que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsETH(ethereumIngresado, valorEthereum))
                    break
                case 3:
                    let dogecoinIngresado = Number(prompt("Ingrese la cantidad de DOGE que desea convertir a $ARS: "))
                    while (isNaN(dogecoinIngresado)){
                        alert("Ingrese una cantidad válida")
                        dogecoinIngresado = Number(prompt("Ingrese la cantidad de DOGE que desea convertir a $ARS: "))
                    }
                    alert("La conversion se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsDOGE(dogecoinIngresado, valorDogecoin))
                    break
                case 4:
                    let tetherIngresado = Number(prompt("Ingrese la cantidad de USDT que desea convertir a $ARS: "))
                    while (isNaN(tetherIngresado)){
                        alert("Ingrese una cantidad válida")
                        tetherIngresado = Number(prompt("Ingrese la cantidad de USDT que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsUSDT(tetherIngresado, valorTether))
                    break
                case 5:
                    let trxIngresado = Number(prompt("Ingrese la cantidad de TRX que desea convertir a $ARS: "))
                    while (isNaN(trxIngresado)){
                        alert("Ingrese una cantidad válida")
                        trxIngresado = Number(prompt("Ingrese la cantidad de TRX que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsTRX(trxIngresado, valorTrx))
                    break
                case 6:
                    let binanceIngresado = Number(prompt("Ingrese la cantidad de BNB que desea convertir a $ARS: "))
                    while (isNaN(binanceIngresado)){
                        alert("Ingrese una cantidad válida")
                        binanceIngresado = Number(prompt("Ingrese la cantidad de BNB que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + convertirArsBNB(binanceIngresado, valorBinance))
                    break
                default:
                    alert("La opción elegida no es válida. Ingrese una opción del 1 al 6.")
            }
            seguirConvirtiendo = confirm("¿Desea seguir convirtiendo?")
        } while (seguirConvirtiendo);
    }

alert("¡Gracias por su visita!")
