function* fibonacciSequence(){
    let x = 0, y = 1
    for(; ;){
        yield y
        [x,y] = [y, x+y]
    }
}

function* take(n,iterable){
    let it = iterable[Symbol.iterator]()
    while(n-->0){
        let next = it.next()
        if(next.done) return;
        else yield next.value
    }
}

// Devolver n-avo valor sin que se cicle el método
function fibonacci(n){
    for(let f of fibonacciSequence()){
        if(n <= 0) return f
    }
}

console.log(fibonacci(20))
