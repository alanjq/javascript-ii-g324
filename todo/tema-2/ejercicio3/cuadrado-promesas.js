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


const numero = 's'

cuadradoPromesa(numero)
    .then((res) => {
        console.log(`Cuadrado de ${res.valor}: ${res.resultado}`);
    })
    .catch((error) => {
        console.error(error);
    })
