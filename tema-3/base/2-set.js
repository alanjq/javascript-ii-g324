
// SET
let s = new Set(); // Un conjunto nuevo y vacío
let t = new Set([1, s]); // Un nuevo conjunto con dos miembros


let t = new Set(s); // Un nuevo conjunto que copia los elementos de s.
let unico = new Set("Mississippi"); // 4 elementos: "M", "i","s" y "p"


let s = new Set(); // Empezar vacío
s.size // => 0
s.add(1); // Agregar un número
s.size // => 1; ahora el conjunto tiene un miembro s.add(1); // Agregar el mismo número de nuevo s.size // => 1; el tamaño no cambia
s.add(true); // Agrega otro valor; tenga en cuenta que está bien mezclar tipos s.size // => 2
s.add([1,2,3]); // Agregar un valor de matriz
console.log(s);
s.size // => 3; se agregó la matriz, no sus elementos
s.delete(1) // => verdadero: elemento 1 eliminado con éxito
s.size // => 2: el tamaño vuelve a ser 2
s.delete("test") // => falso: "test" no era miembro, la eliminación falló s.delete(true) // => true: eliminación exitosa
s.delete([1,2,3]) // => falso: la matriz en el conjunto es diferente s.size // => 1: todavía hay una matriz en el conjunto
s.clear(); // Eliminar todo del conjunto
s.size // => 0
