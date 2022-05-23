/* Ejercicio 2*/

export function hayParOPareja();

function hayParOPareja(array){
    let pares=[];
    let b=false;
        for(num of array)
        {
            if(num%2===0 && num!==0)
            {
                pares.push(num);
            }
        }
        if(pares.length===0)
        {
            return b;
        }
        for(let m=0;m<array.length;m++)
        {
            for(let j=m+1;j<array.length;j++)
            {
                for(let k=0;k<pares.length;k++)
                {
                    if(array[m] + array[j] === pares[k])
                    b=true;
                }
            }
        }
    return b;
}