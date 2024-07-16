// Generadores
function* primosUnDigito(){
    yield 2
    yield 3
    yield 5
    yield 7
    // --- 
}
let primos = primosUnDigito()

console.log(primos.next());
console.log(primos.next());
console.log(primos.next());
console.log(primos.next());
console.log(primos.next());

let res = primos[Symbol.iterator]
console.log(res);


// Creando un generador
const seq = function* (from, to){
    for(let i=from; i <= to; i++) yield i
}

console.log(...seq(3,10))

