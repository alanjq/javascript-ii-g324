let m = new Map(); // Crea un nuevo mapa vacío
let n = new Map([ // Un nuevo mapa inicializado con claves de cadena asignadas a números ["one", 1],
["two", 2]
]);


let copiar = new Map(n); // Un nuevo mapa con las mismas claves y valores como mapa n
let o = {x: 1, y: 2}; // Un objeto con dos propiedades
let p = new Map(Object.entries(o)); // Igual que new Map([["x",1], ["y", 2]])


let m = new Map(); // Empezar con un mapa vacío
m.size // => 0: los mapas vacíos no tienen claves
m.set("uno", 1); // Asignar la clave "uno" al valor 1
m.set("dos", 2); // Y la clave "dos" al valor 2.
m.size // => 2: el mapa ahora tiene dos claves
m.get("dos") // => 2: devuelve el valor asociado con la clave "dos" m.get("tres") // => indefinido: esta clave no está en el conjunto m.set("uno", true); // Cambiar el valor asociado con una clave existente m.size // => 2: el tamaño no cambia
m.has("uno") // => verdadero: el mapa tiene una clave "uno"
m.has(true) // => false: el mapa no tiene clave true
m.delete("one") // => verdadero: la clave existía y la eliminación se realizó correctamente m.size // => 1
m.delete("tres") // => falso: no se pudo eliminar una clave inexistente
m.clear(); // Elimina todas las claves y valores del mapa

