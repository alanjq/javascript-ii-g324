// Iteradores
let rango = {
    from: 1,
    to: 5
}

for (let num of [rango]) {
    rango[Symbol.iterator] = function () {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    // Aún no recorremos todo el objeto
                    return {
                        done: false,
                        value: this.current++
                    }
                } else {
                    // Ya terminamos de recorrer el iterador
                    return { done: true }
                }
            }
        }
    }
}

// Usando el iterador
for (let num of rango) {
    console.log(num);
}

