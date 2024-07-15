// Código no bloqueante
(function(){
    console.log("Código Asíncrono");
    console.log("Inicio");
})

function dos() {
    console.log("Dos");
}

function uno() {
    setTimeout(() => {
        console.log("Uno");
    }, 0)
    dos()
    console.log("Tres");
}

uno()
console.log("Fin");

// Resultado
// Dos
// Tres
// Fin
// Uno
