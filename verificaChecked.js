import { addItem } from "./addItem.js";
export function verificaChecked(s, n) {
    const body = document.getElementById('corpo')
    const paragrafoAdicionarAlimento = document.getElementById('paragrafoAdicionarAlimento')
    
    if(s.checked) {
        paragrafoAdicionarAlimento.innerText = 'Qual item você deseja adicionar?'
        const inputItem = document.createElement('input')
        body.appendChild(inputItem)
        inputItem.setAttribute('id', 'inputItem')
       addItem()
        
    }else if(n.checked) {
       paragrafoAdicionarAlimento.innerText = 'Ok! Aqui está a sua lista de compras atualizada:'
    }
}