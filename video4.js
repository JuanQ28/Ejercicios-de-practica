//12) Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero=undefined) => {
    if(!numero) return console.warn("El número no ha sido definido");
    if(typeof numero !== "number") return console.warn("Sólo son aceptados números como argumentos");

    if(numero === 0) return console.error("El número no puede ser 0");
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    if(numero !== 2){

        for(let i=1; i<=numero; i++){
            if(numero !== 1 && i === 1) continue;
            if(numero !== 1 && i === numero) continue;
            if(numero%i === 0)return console.info(`El número ${numero} no es primo`);
        }

    }

    return console.info(`El número ${numero} es primo`);
}

//Otra forma de hacerlo

const numeroPrimo2= (numero=undefined)=>{
    if(numero === undefined) return console.warn("No ingresaste un número");
    if(typeof numero !== 'number') return console.warn("El valor ingresado no es un número");
    if(numero === 0) return console.error("El número no puede ser 0");
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");
    if(numero === 1) return console.error("El número no puede ser 1");
    
    let divisible=false;

    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible=true;
            break;
        }
    }

    return (divisible)
    ? console.info(`El número ${numero} no es primo`)
    : console.info(`El número ${numero} es primo`);
}

//





//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (numero=undefined) => (!numero)
    ? console.warn("No se ha definido un valor")
    : (typeof numero !== "number")
        ? console.warn("Sólo se aceptan números para ser evaluados")
        : (numero % 2 === 0)
            ? console.info(`El número ${numero} es par`)
            : console.info(`El número ${numero} es impar`);

//Otra forma de hacerlo

const numeroParImpar = (numero=undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
    if(typeof numero !== 'number') return console.warn("El valor ingresado no es un número");

    return (numero % 2 === 0)
        ? console.info(`El número ${numero} es par`)
        : console.info(`El número ${numero} es impar`);
}

//






//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. 
//miFuncion(0,"C") devolverá 32°F.

const conversion = (grados = "", unidad = "") =>{
    if(!grados && grados !== 0) return console.warn("Los grados no han sido definidos");
    if(typeof grados !== "number") return console.warn("Sólo con aceptados números como grados");

    if(!unidad) return console.warn("La unidad no ha sido definida");
    if(typeof unidad !== "string") return console.warn("Sólo con aceptados carácteres como unidades");

    if(unidad.toLowerCase() === "c") return console.info(`${grados}°C son iguales a ${(grados * 9/5) + 32}°F`);

    if(unidad.toLowerCase() === "f") return console.info(`${grados}°F son iguales a ${(grados - 32) * 5/9}°C`);

}

//Otra forma de hacerlo

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("No ingrssaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un número`);

    if(unidad === undefined)return console.warn("No ingresaste el tipo de grado a convertir");

    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados * 9/5) + 32)}°F`);
    } else if(unidad === "F"){
        return console.info((`${grados}°F = ${Math.round((grados - 32) * 5/9)}°C`));
    } else{
        return console.error("El tipp de grados a convetir NO es válido");
    }
}


//