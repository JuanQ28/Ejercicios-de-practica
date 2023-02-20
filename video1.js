/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

let texto1 = "Hola a todos";

const primerEjercicio = cadena => cadena.length;

let condicion1 = (typeof texto1 === "string") 
? primerEjercicio(texto1) 
: "No es una cadena de texto";

console.log(condicion1);

//otro método=

const ejercicio1= (string="") => (!string) 
    ?console.warn("No ingresaste una monda")
    :console.info(`La cadena "${string}" tiene ${string.length} caracteres`)

    ejercicio1(texto1);

//


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

let texto2 = "Hola mundo", cantidad=2;

const segundoEjercicio = (cadena,caracteres) => cadena.slice(0,caracteres);

condicion2 = (typeof texto2 === "string") 
? segundoEjercicio(texto2,cantidad) 
: "No es una cadena de texto";

console.log(condicion2);

//Otro método (mejor)

const ejercicio2= (cadena="", caracteres=undefined) => (!cadena)
    ?console.warn("no pasaste una monda de texto")
    :(!caracteres)
        ?console.warn("no pasaste una monda de caracter")
        :console.info(`pilla ve ${cadena.slice(0,caracteres)}`);


//



/* 3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

let texto3 = "Hola que tal", separa=" ";

const condicion3 = (cadena,separacion) => (typeof texto3 ===  "string") 
? cadena.split(separacion)
: "No es una cadena de texto";

console.log(condicion3(texto3,separa));

//otro metodo:

const condicion32 = (cadena="",separacion=undefined) => (!cadena)
?console.warn("no pasaste una monda de texto")
:(caracteres===undefined)
    ?"No pasaste el caracter separador"
    :console.info(cadena.split(separacion));

//




/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá 
Hola Mundo Hola Mundo Hola Mundo. */

let texto4 = "CursoJS ", veces=3;

const cuartoEjercicio = (cadena, cantidad) => cadena.repeat(cantidad);

condicion4 = (typeof texto4 === "string") 
? cuartoEjercicio(texto4,veces) 
: "No es una cadena de texto";


console.log(condicion4);

//Otro Método

const cuartoEjercicio2 = (cadena = "",cantidad = undefined) => {
    if(!cadena)return console.warn("Qué monda haré sin texto?");

    if(cantidad===undefined)return console.warn("ahora q hago sin las veces XD");

    if(cantidad===0)return console.error("El número de veces no puede ser 0");

    if(Math.sign(cantidad)===-1)return console.error("el número de veces no puede ser negativo");

    for(let i=1; i<=cantidad;i++) console.info(`${cadena}, ${i}`);
    
}

cuartoEjercicio2(texto4,veces);
//