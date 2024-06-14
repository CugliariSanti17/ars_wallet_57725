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
        switch (opcionElegida1){
            case 1:
                let valorBitcoin = 63237532.37
                let cantidadBitcoin = pesosIngresados / valorBitcoin
                alert("La conversión se realizo con éxito")
                alert("La cantidad de BITCOIN que obtuvo es: " + cantidadBitcoin)
                break
            case 2:
                let valorEthereum = 3360512.73
                let cantidadEthereum = pesosIngresados / valorEthereum
                alert("La conversión se realizo con éxito")
                alert("La cantidad de ETHEREUM que obtuvo es: " + cantidadEthereum)
                break
            case 3:
                let valorDogecoin = 134.29
                let cantidadDogecoin = pesosIngresados / valorDogecoin
                alert("La conversión se realizo con éxito")
                alert("La cantidad de DOGECOIN que obtuvo es: " + cantidadDogecoin)
                break
            case 4:
                let valorTether = 906.48
                let cantidadTether = pesosIngresados / valorTether
                alert("La conversión se realizo con éxito")
                alert("La cantidad de TETHER (USDT) que obtuvo es: " + cantidadTether)
                break
            case 5:
                let valorTrx = 105.94
                let cantidadTrx = pesosIngresados / valorTrx
                alert("La conversión se realizo con éxito")
                alert("La cantidad de USDC que obtuvo es: " + cantidadTrx)
                break
            case 6:
                valorBinance = 610579.91
                cantidadBinance = pesosIngresados / valorBinance
                alert("La conversión se realizo con éxito")
                alert("La cantidad de BNB que obtuvo es: " + cantidadBinance)
                break
                case 7:
                    let valorDolar = 907.12
                    cantidadDolar = pesosIngresados / valorDolar
                    alert("La conversión se realizo con éxito")
                    alert("La cantidad de dólares que obtuvo es: " + cantidadDolar)
                    break
            default:
                alert("La opción elegida no es valida. Ingrese una opcion del 1 al 6.")
                opcionElegida1 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB: "))
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
                    let valorBitcoin = 63237532.37
                    let bitcoinIngresado = Number(prompt("Ingrese la cantidad de BTC que desea convertir a $ARS: "))
                    let bitcoinConvertido = bitcoinIngresado * valorBitcoin
                    while (isNaN(bitcoinIngresado)){
                        alert("Ingrese una cantidad válida")
                        bitcoinIngresado = Number(prompt("Ingrese la cantidad de BTC que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + bitcoinConvertido)
                    break
                case 2:
                    let valorEthereum = 3360512.73
                    let ethereumIngresado = Number(prompt("Ingrese la cantidad de ETH que desea convertir a $ARS: "))
                    let ethereumConvertido = ethereumIngresado * valorEthereum
                    while(isNaN(ethereumIngresado)){
                        alert("Ingrese una cantidad válida")
                        ethereumIngresado = Number(prompt("Ingrese la cantidad de ETH que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + ethereumConvertido)
                    break
                case 3:
                    let valorDogecoin = 134.29
                    let dogecoinIngresado = Number(prompt("Ingrese la cantidad de DOGE que desea convertir a $ARS: "))
                    let dogecoinConvertido = dogecoinIngresado * valorDogecoin
                    while (isNaN(dogecoinIngresado)){
                        alert("Ingrese una cantidad válida")
                        dogecoinIngresado = Number(prompt("Ingrese la cantidad de DOGE que desea convertir a $ARS: "))
                    }
                    alert("La conversion se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + dogecoinConvertido)
                    break
                case 4:
                    let valorTether = 906.48
                    let tetherIngresado = Number(prompt("Ingrese la cantidad de USDT que desea convertir a $ARS: "))
                    let tetherConvertido = tetherIngresado * valorTether
                    while (isNaN(tetherIngresado)){
                        alert("Ingrese una cantidad válida")
                        tetherIngresado = Number(prompt("Ingrese la cantidad de USDT que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + tetherConvertido)
                    break
                case 5:
                    let valorTrx = 105.94
                    let trxIngresado = Number(prompt("Ingrese la cantidad de TRX que desea convertir a $ARS: "))
                    let trxConvertido = trxIngresado * valorTrx
                    while (isNaN(trxIngresado)){
                        alert("Ingrese una cantidad válida")
                        trxIngresado = Number(prompt("Ingrese la cantidad de TRX que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + trxConvertido)
                    break
                case 6:
                    let valorBinance = 610579.91
                    let binanceIngresado = Number(prompt("Ingrese la cantidad de BNB que desea convertir a $ARS: "))
                    let binanceConvertido = binanceIngresado * valorBinance
                    while (isNaN(binanceIngresado)){
                        alert("Ingrese una cantidad válida")
                        binanceIngresado = Number(prompt("Ingrese la cantidad de BNB que desea convertir a $ARS: "))
                    }
                    alert("La conversión se realizo con exito")
                    alert("La cantidad de $ARS que obtuvo es: " + binanceConvertido)
                    break
                default:
                    alert("La opción elegida no es válida. Ingrese una opción del 1 al 6.")
                    opcionElegida2 = parseInt(prompt("1. BTC | 2. ETH | 3. DOGE | 4. USDT | 5. TRX | 6. BNB: "))
            }
            seguirConvirtiendo = confirm("¿Desea seguir convirtiendo?")
        } while (seguirConvirtiendo);
    }

alert("¡Gracias por su visita!")
