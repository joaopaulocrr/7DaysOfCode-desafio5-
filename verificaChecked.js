import { addItem } from "./addItem.js";
import { buttonInicial, body } from "./script.js";
export function verificaChecked(s, n) {
    
    const paragrafoAdicionarAlimento = document.getElementById('paragrafoAdicionarAlimento')
    
    if(s.checked) {
        paragrafoAdicionarAlimento.innerText = 'Qual item você deseja adicionar?'
        const inputItem = document.createElement('input')
        body.appendChild(inputItem)
        inputItem.style.marginBottom = '12px'
        inputItem.setAttribute('id', 'inputItem')
        if(inputItem.value == '') {
            buttonInicial.setAttribute('disabled', '')
        }
       addItem()
       

       
    }else if(n.checked) {
       paragrafoAdicionarAlimento.innerText = 'Ok! Aqui está a sua lista de compras atualizada:'
    }
    
}