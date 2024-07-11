async function funcionAsincronaDeclarada(){
    try{
        console.log('Inicio Aync Function');
        let obj = await cuadradoPromesa(5)
        console.log(`Resultado asíncrono:, ${obj.valor}, ${obj.resultado}`);
        console.log('Fin Async Function');
    }catch(er){

    }
}


// Elevar al cuadrado y usar un callback para el resultado
function cuadradoPromesa(valor) {
    // Validamos que sea diferente a un número
    if (isNaN(valor)) {
        return Promise.reject(`Error. El valor ingresado ${valor} no es un número.`)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                valor: valor,
                resultado: valor * valor
            })
        }, 100)
    })
}

funcionAsincronaDeclarada(1)
