/* Ejercicio 4*/

export function convertirARomano();

function convertirARomano(num) { 
    let romanos = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1};
    let numARomano = '',i;
    if(num>3999)
    {
        return "ERROR (excede máximo en numeros romanos (4000))";
    }
    else
    {
    for ( i in romanos ) 
    { 
        while ( num >= romanos[i] ) 
        {
            numARomano += i; 
            num -= romanos[i];
        } 
    } 
    }
    return numARomano; 
    }