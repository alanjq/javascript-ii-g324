// Objeto principal con los métodos compartidos
const persona = {
    nombre: "John",
    apellido: "Doe",
    getNombre: function(){
        return `${this.apellido}, ${this.nombre}`
    },
    infoCompleta: function(ciudad, estado){
        return `${this.nombre} ${this.apellido}. ${ciudad}, ${estado}`
    }
}

const persona1 = {
    nombre: "Arturo",
    apellido: "Tirado",
}

const persona2 = {
    nombre: "Mary",
    apellido: "Doe"
}

const persona3 = {
    nombre: "Helen",
    apellido: "Nilsen"
}

// Obtener el nombre de persona1 usando los métodos en PERSONA
console.log(persona.getNombre.call(persona1));
console.log(persona.getNombre.call(persona2));


// Usando apply
console.log(persona.infoCompleta.apply(persona1,["Ciudad de México", "CDMX"]))
console.log(persona.infoCompleta.apply(persona2,["Fuera", "Otro"]))


// Usando bind
let otraPersona = persona.getNombre.bind(persona3)
console.log(otraPersona());


// Enlace implícito
function alerta(){
    return this.edad + ' años'
}

function getEdad(mensaje){
    return mensaje + this.edad + ' años'
}

const miObjeto = {
    edad: 25
}

console.log(getEdad.call(miObjeto,'¡Hola! Tengo '))


// Usando constructor
function NuevaPersona(nombre,laEdad){
    this.edad = laEdad
    this.nombre = nombre
}

const yo = new NuevaPersona("Alan", 30)
yo.edad//?
yo.nombre//?
