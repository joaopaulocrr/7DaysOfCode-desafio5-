import { verificaChecked } from "./verificaChecked.js";
const body = document.getElementById('corpo')



const frutas = { 
    name: "Frutas",
    frutas: []
}
const doces = { 
    name: "Doces",
    doces: []
}
const congelados = { 
    name: "Congelados",
    congelados: []
}
const laticinios = { 
    name: "Laticinios",
    laticinios: []
}
const cereais = { 
    name: "Cereais",
    cereais: []
}

let listaDeCompras = [laticinios, cereais, doces, congelados, frutas]

const yes = document.getElementById('sim')
const no = document.getElementById('nao')
const buttonInicial = document.getElementById('buttonInicial')

buttonInicial.addEventListener('click', () => {
    verificaChecked(yes, no)
   
})
