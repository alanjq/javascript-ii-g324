const GENEROS_ACEPTADOS = [
    "Acción",
    "Adultos",
    "Animación",
    "Autobiografía",
    "Aventura",
    "Ciencia ficción",
    "Cine negro",
    "Comedia",
    "Concursos de televisión",
    "Crimen",
    "Deportes",
    "Documental",
    "Drama",
    "Familiar",
    "Fantasía",
    "Guerra",
    "Historia",
    "Musicales",
    "Misterio",
    "Noticias",
    "Películas de vaqueros",
    "Programa de entrevistas",
    "Reality shows",
    "Romance",
    "Suspenso",
    "Terror"
]

class Pelicula {
    id        = ""   // 9 caracteres
    titulo    = ""   // máx 100 caracteres
    director  = ""   // máx 50 caracteres
    estreno   = ""   // número de 4 digitos
    pais_origen = [] // arreglo
    generos     = []  // arreglo, dentro de GENEROS_ACEPTADOS
    calificacion = "" // 0 - 10

    constructor(id, titulo, director, estreno, pais_origen, generos, calificacion){
        this.id = id
        this.titulo = titulo
        this.director = director
        this.estreno = estreno
        this.pais_origen = pais_origen
        this.generos = this.isGeneroAceptado(generos) ? [generos] : []
        this.calificacion = this.isCalificacionValida(calificacion) ? calificacion : 0
    }

    // Validaciones

    // Validar que el género esté en la lista de los aceptados
    isGeneroAceptado(genero){
        return GENEROS_ACEPTADOS.indexOf(genero) === -1 ? false : true
    }

    // Validar que la calificación sea entre 0 y 10
    isCalificacionValida(valor){
        return valor >= 0 && valor <= 10
    }

    getInfoTecnica(){
        return [`
            "== Info técnica ==",
            "ID: ${this.id}",
            "Título: ${this.titulo} ",
            "Director: ${this.director}",
            "Fecha de escreno: ${this.es}",
            "Países: ${this.pais_origen}",
            "Género: ${this.generos.join(", ")}",
            "Calificación: ${this.calificacion}",
        `].join("\n")
    }
}
// isGeneroAceptado('Acción') // ?
// isCalificacionValida(1) // ?

const peli = new Pelicula("ADOSCZX",
    "Una pelicula normal",
    "Juan Perez",2024,"México","Acción", "5"
)

console.log(peli.getInfoTecnica())
