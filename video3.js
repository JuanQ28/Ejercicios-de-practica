/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const aleatorio = () => console.info(Math.round((Math.random()*100) + 500));

aleatorio();





/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

//Esta forma de resolverlo falla en númmeros como 2000, ya que js eliminar los números 0 a la izquierda como 0002, por lo tanto
//los valores han de ser pasados a strings para ser evaluados

const capicúa= (numero=undefined) =>{ 
    if (typeof numero!=="number") return console.warn("No haz ingresado ningún numero");
    
    let reversa= numero.toString().split('').reverse().join('');

    return (numero === parseInt(reversa))
    ?console.info("Sí, tu número es capicúa")
    :console.info("Sí, tu número es capicúa");
}

capicúa(5321235);

 
//Otra forma de resolverlo:

const capicua2= (numero=0) => {
    if(!numero)return console.warn("No ingresaste ningún número");

    if(typeof numero !=="number")console.error(`El valor ${numero} No es un número.`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ? console.info("Sí, tu número es capicúa")
    : console.info("Sí, tu número es capicúa");
} 

//





/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos 
desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial= (numero=undefined) => {
    let resultado=1;

    if(!numero) return console.warn("No haz ingresado ningún valor")
    if(typeof numero !== 'number') return console.warn("El valor ingresado no es un número");

    for(let i=1; i<=numero; i++){
        resultado *= i;
    }
    
    return console.info(resultado);
}

factorial(5);


//Otra forma de hacerlo (No se pueden sacar factoriales de números negativos)

const factorial2 = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== 'number') return console.warn("El valor ingresado no es un número");

    if(numero === 0) return console.error("El número no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let factorial=1;

    for(let i=numero; i > 1; i--){
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

//
