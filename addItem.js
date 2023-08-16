import { body } from "./script.js";
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

const valorDoInput = document.getElementById('inputItem')


let listaDeCompras = [laticinios, cereais, doces, congelados, frutas]
export function addItem() {
    const buttonAdd = document.createElement('button')
       body.appendChild(buttonAdd)
       buttonAdd.style.display = 'block'
       buttonAdd.textContent = 'Ok'

       buttonAdd.addEventListener('click' ,() => {
            inputItem.value = ''

       })
}