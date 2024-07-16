// Maps
let mapa = new Map() // Valor inicial opcional

let m = new Map([
    ["one", 1],
    ["two", 2]
])
m.forEach((i,b)=>{
    console.log(i,b);
})

// Usando objeto en lugar de array
let copiar = new Map(m)
let o = {x: 1, y: 2}

let p = new Map(Object.entries(o))
console.log(p);

let mapanuevo = new Map()
mapanuevo.set("uno", true)
mapanuevo.set("dos", 2)
mapanuevo.set("tres", 3)
mapanuevo.clear()
console.log(mapanuevo)
