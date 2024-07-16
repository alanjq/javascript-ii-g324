// Usando SET
const persona = {
    nombre: 'Daniel',
    apellido: 'Osorio'
}

const persona2 = {
    nombre: 'Jocelyn',
    apellido: 'Palacios'
}

const persona3 = {
    nombre: 'Arturo',
    apellido: 'Tirado'
}

let grupo = []
grupo.push(persona, persona2, persona3, persona, persona2, persona3)

// console.log(grupo)

let gruposet = new Set([persona, persona2, persona3, {nombre: 'Desconocido', apellido: ''}])

let grupos = new Set(gruposet, gruposet,gruposet,gruposet,gruposet)
// console.log(grupos)


// Usando misssippi
let palabra = new Set("Mississippi")
console.log(palabra);
