// Usando this
function alerta(){
    console.log(this.edad + ' años');
}

const miObjeto = {
    edad: 22,
    alerta
}

var edad = 50
alerta()
