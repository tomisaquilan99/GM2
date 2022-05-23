/* Ejercicio 3*/

export function esPalindromo();

function esPalindromo(array){
    let arrayInvertido = (array).split("").reverse().join("");
    let b;
    array === arrayInvertido ? b = true : b = false;
    return b;
    }