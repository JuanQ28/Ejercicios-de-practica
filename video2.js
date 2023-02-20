/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

let cadena = "Hola Mundo";

const ejercicio5= texto => texto.split('').reverse().join('');

//console.log(ejercicio5(cadena));

//Otro método:

const ejercicio52= (texto="") => (!texto)
?console.warn("No haz ingresado texto")
:(typeof texto!=="string")
    ?console.error("Sólo se aceptan cadenas de texto")
    :console.info(texto.split('').reverse().join(''));

ejercicio52(cadena);

//







/* 6) Programa una función para contar el número de veces que se repite una palabra en un 
texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

//mi primer forma de hacerlo:
let texto= "hola mundo adios mundo", valor="mundo", sumatoria=0;

const ejercicio6= (string,busca) => {
    texto.split(' ').forEach(elemento => {
        if(elemento==busca)sumatoria++;
    })
    return sumatoria;
}

//console.log(ejercicio6(texto,valor));

//mi segunda forma de hacelo
const excercise6= (string,busca) =>{
let regExp = new RegExp(busca,"ig")
let contar = string.match(regExp).length;
return `En el texto suministrado la palabra aparece ${contar}veces`;
}

//console.log(excercise6(texto,valor));
//

//Otra forma de hacerlo:

const ejercicio62 = (texto="",valor="") => {
    if(!texto)return console.warn("No definiste el texto a modificar");
    if(!valor)return console.warn("No definiste el carácter a contar");

    let i=0, contador=0;

    while(i !== -1){
        i=texto.indexOf(valor,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${valor} se repite ${contador} veces`);
}

ejercicio62(texto,valor);
//






/* 7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

let palabra= "Salas";

const ejercicio7 =string =>{
    let reversa= string.split('').reverse().map(elemento => elemento.toLowerCase()).join('');

    if(string.toLowerCase()===reversa)return console.info(true);
    else return console.info(false);
}

//ejercicio7(palabra);

//Otra forma de hacerlo

const palindromo= (texto="")=>{
    if(!texto)return console.warn("No ingresaste una cadena de texto");

    texto= texto.toLocaleLowerCase();
    let alRevez= texto.split("").reverse().join('');

    return (texto === alRevez)
    ?console.info(`Sí es palíndroma, Palabra original ${texto}, palabra al revés ${alRevez}.`)
    :console.info(`No es palíndroma, Palabra original ${texto}, palabra al revés ${alRevez}.`);
}

//
palindromo("SaLas");






/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

//Mi forma de hacerlo

let texto8= "xyz1, xyz2, xyz3, xyz4 y xyz5" , eliminar="xyz";

const ejercicio8 = (texto="",elimine="") => {
    if(!texto)return console.error("No definiste el texto a modificar");
    if(!elimine)return console.error("No definiste el carácter a eliminar");

    let regExp= new RegExp(elimine,"ig");

    console.info(texto.replaceAll(regExp,""));
} 

ejercicio8(texto8,eliminar);

//


//Otra forma de hacerlo

const eliminarCaracteres= (texto = "", patron ="") =>
    (!texto)
        ?console.warn("No ingresaste le texto")
        :(!patron)
            ?console.warn("No ingresaste un patrón de caracteres")
            :console.info(texto.replace(new RegExp(patron,"ig"),""));  


eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
eliminarCaracteres("aoisdnaoindoiq2ni1n23 25 32i45in1o23n1oi2n4oi23n5oi23","[A-Z]");

//