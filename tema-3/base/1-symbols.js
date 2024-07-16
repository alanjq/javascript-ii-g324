// Symbols
let strNombre = "string name"; // Una cadena para usar como nombre de propiedad
let symNombre = Symbol("propname"); // Un Símbolo para usar como nombre de propiedad typeof strNombre // => "string": strNombre es una cadena
typeof symNombre // => "symbol": symNombre es un símbolo
let o = {}; // Crea un nuevo objeto
o[strNombre] = 1; // Define una propiedad con un strNombre cadena
o[symNombre] = 2; // Define una propiedad con symNombre símbolo
o[strNombre]; // => 1: accede a la propiedad strNombre
o[symNombre]; // => 2: accede a la propiedad símbolo


// Obtener valor del símbolo
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2); // => false


let s = Symbol("sym_x");
s.toString() // => "Symbol(sym_x)"


let s = Symbol.for("compartido");
let t = Symbol.for("compartido");
s === t // => true
s.toString() // => "Symbol(compartido)" Symbol.keyFor(t) // => "compartido"


const NOMBRE = Symbol();
const persona = {
    [NOMBRE]: "Juan"
}
console.log(persona)
