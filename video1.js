/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

let texto1 = "Hola a todos";

const primerEjercicio = cadena => cadena.length;

let condicion1 = (typeof texto1 === "string") 
? primerEjercicio(texto1) 
: "No es una cadena de texto";

console.log(condicion1);

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

let texto2 = "Hola mundo", cantidad=2;

const segundoEjercicio = (cadena,caracteres) => cadena.slice(0,caracteres);

condicion2 = (typeof texto2 === "string") 
? segundoEjercicio(texto2,cantidad) 
: "No es una cadena de texto";

console.log(condicion2);

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

let texto3 = "Hola que tal", separa=" ";

const tercerEjercicio = (cadena,separacion) => cadena.split(separacion);

condicion3 = (typeof texto3 ===  "string") 
? tercerEjercicio(texto3,separa) 
: "No es una cadena de texto";

console.log(condicion3);


/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá 
Hola Mundo Hola Mundo Hola Mundo. */

let texto4 = "CursoJS ", veces=3;

const cuartoEjercicio = (cadena, cantidad) => cadena.repeat(cantidad);

condicion4 = (typeof texto4 === "string") 
? cuartoEjercicio(texto4,veces) 
: "No es una cadena de texto";


console.log(condicion4);