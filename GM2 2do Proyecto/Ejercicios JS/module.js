import { adicion } from './ej1.js';
import { resta } from './ej1.js';
import { hayParOPareja } from './ej2.js';
import { esPalindromo } from './ej3.js';
import { convertirARomano } from './ej4.js';


const resultados = document.getElementById("resultados");
const inputAdd = document.getElementById("input-2");
const listaEjercicios = document.getElementById("ejercicios")
const infoEjercicio = document.getElementById("ej-info")
const infoInput2 = document.getElementById("ej1-input2-info")

function generalidadesCases234 (textarea,input2,info1,info2){
        textarea.textContent = ""
        input2.style.display ="none";
        info1.style.display = "block";
        info2.style.display = "none";
}

const opcionCambiada =() =>{
    const opcionSeleccionada = listaEjercicios.selectedIndex;
    switch (opcionSeleccionada){
        case 1:
            resultados.textContent = ""
            inputAdd.style.display = "block";
            infoEjercicio.style.display ="block";
            infoInput2.style.display = "block"
            infoEjercicio.innerHTML = "Ingrese el array a sumar y restar";
            infoInput2.innerHTML = "Ingrese el número a sumar y restar"
            break;
            
        case 2:
            generalidadesCases234(resultados,inputAdd,infoEjercicio,infoInput2);
            infoEjercicio.innerHTML = "Ingrese el array del cual desea saber si hay al menos un número par y paridad";
            break;

        case 3:
            generalidadesCases234(resultados,inputAdd,infoEjercicio,infoInput2);
            infoEjercicio.innerHTML = "Ingrese la palabra la cual desea saber si es palíndromo o podría serlo";
            break;

        case 4:
            generalidadesCases234(resultados,inputAdd,infoEjercicio,infoInput2);
            infoEjercicio.innerHTML = "Ingrese el número que desea convertir a romano";
            break;
    }
}

const formLogic= (event) => {
    event.preventDefault()
    infoEjercicio.style.display ="none";
    infoInput2.style.display ="none";
    let form = event.target;
    let el=form.elements;
    let input = el["content"].value;
    let exercise = el["ejercicios"].value;
    let input2 = el["content2"].value;

    switch(exercise){
        case "suma-resta":
            const arraySumaResta = transformInputToNumbersArray(input);
            const res01 = adicion(arraySumaResta, Number(input2));
            const res02 = resta(arraySumaResta, Number(input2));
            resultados.textContent = "La suma es " + res01 + " y la resta es " + res02;
            break;

        case "par-pareja": 
            const arrayParOPareja = transformInputToNumbersArray(input);
            const res2 = hayParOPareja(arrayParOPareja);
            res2 === true ? resultados.textContent = "Hay par y pareja" : resultados.textContent = "No hay par o pareja";
            break;

        case "palindromo":
            const arrayPalindromo = input;
            const res3= esPalindromo(arrayPalindromo);
            res3 === true ? resultados.textContent = "Es palindromo" : resultados.textContent = "No es palindromo";
            console.log(arrayPalindromo);
            break;

        case "numero-romano":
            const numRomano = input;
            const res4 = convertirARomano(numRomano)
            resultados.textContent = "El numero convertido en romano es " + res4;
            break;
    }
    inputAdd.style.display = "none";
    form.reset();
}

const form = document.getElementById("form-ejs");
form.addEventListener('submit', formLogic);
listaEjercicios.addEventListener("change", opcionCambiada);

function transformInputToNumbersArray (input){
    const arrayStrings = input.split(",");
    const numberString = [];
    for(let el of arrayStrings){
        numberString.push(Number(el));
    }
    return numberString;
}