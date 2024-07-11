// Elevar al cuadrado y usar un callback para el resultado
function cuadradoCallback(numero, fncallback) {
    setTimeout((function () {
        console.log('Inicia Callback');
        if (typeof fncallback === 'function')
            fncallback(numero, numero * numero)
    }), Math.random() * 1000)
}

cuadradoCallback(1, (num, res) => {
    console.log('Resultado (',num,'):', res);
})

cuadradoCallback(2, (num, res) => {
    console.log('Resultado (',num,'):', res);
})

cuadradoCallback(3, (num, res) => {
    console.log('Resultado (',num,'):', res);
})

cuadradoCallback(4, (num, res) => {
    console.log('Resultado (',num,'):', res);
})

cuadradoCallback(5, (num, res) => {
    console.log('Resultado (',num,'):', res);
})
