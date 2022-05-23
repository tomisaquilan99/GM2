/* Ejercicio 1*/

export function adicion();
export function resta();

function adicion(array, numero){
    let arrayToNumber = "";
    for(num of array)
    {
        arrayToNumber += num.toString();
    }

    arrayToNumber = (Number(arrayToNumber)+numero);
    console.log(arrayToNumber);
    arrayToNumber = arrayToNumber.toString().split("").map(elem=>Number(elem));
    console.log(arrayToNumber);

    return arrayToNumber
}

function resta(array, numero){
    let arrayToNumber = "";
    for(num of array)
    {
        arrayToNumber += num.toString();
    }

    if((Number(arrayToNumber)-numero) < 0) {
        arrayToNumber=[0]
       } else {
        arrayToNumber = (Number(arrayToNumber)-numero).toString().split("").map(elem=>Number(elem)); 
       }

    return arrayToNumber
}