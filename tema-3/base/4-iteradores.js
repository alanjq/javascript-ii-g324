let rango = {
    from: 1,
    to: 5
};

// 1. Una llamada a for..of inicializa una llamada al método Symbol.iterator
rango[Symbol.iterator] = function () {
    // ... devuelve el objeto iterador:
    // 2. En adelante, for..of trabaja solo con el objeto iterador debajo, pidiéndole los siguientes valores return {
    current: this.from,
        last: this.to,
            // 3. next() es llamado en cada iteración por el bucle for..of
            next() {
        // 4. Debe devolver el valor como un objeto {done: Boolean, value : any}
        if (this.current <= this.last) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true }; //Cuando regresa true, significa que el bucle ha finalizado }
        }
    };
};
//para utilizarlo, como se tenía pensado
for (let num of rango) {
    console.log(num); // 1, luego 2, 3, 4, 5
}


// Una función generadora que produce el conjunto de un dígito (base-10) primos. function* primosUnDigito() { // Invocar esta función no ejecuta el código
yield 2; // pero solo devuelve un objeto generador. Vocación
yield 3; // se ejecuta el método next() de ese generador
yield 5; // el código hasta que una declaración de rendimiento proporcione yield 7; // el valor devuelto por el método next().
}
// Cuando invocamos la función generador, obtenemos un generador let primos = primosUnDigito();
// Un generador es un objeto iterador que itera los valores obtenidos primos.next().value // => 2
primos.next().value // => 3
primos.next().value // => 5
primos.next().value// => 7
primos.next().done // => true
// Los generadores tienen un método Symbol.iterator para hacerlos iterable primos[Symbol.iterator]() // => números primos
// Podemos usar generadores como otros tipos iterables //[...primosUnDigito()] // => [2,3,5,7]
let suma = 0;
for(let primos of primosUnDigito()) suma += primos; suma // => 17


const seq = function* (from, to) {
    for (let i = from; i <= to; i++) yield i; };
[...seq(3, 5)] // => [3, 4, 5]


function* fibonacciSequence() { let x = 0, y = 1;
    for (; ;) {
    yield y;
    [x, y] = [y, x + y]; }
    }
    }

    