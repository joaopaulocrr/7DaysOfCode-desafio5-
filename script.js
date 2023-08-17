export const body = document.getElementById('corpo')

const paragrafoAdicionarAlimento = document.getElementById('paragrafoAdicionarAlimento')
const ulCategorias = document.getElementById('ulDeCategorias')
const addButton = document.getElementById('addButton')

const frutas = {
    name: "Frutas",
    frutas: ['maçã', 'banana']
}
const doces = {
    name: "Doces",
    doces: ['bala', 'doce']
}
const congelados = {
    name: "Congelados",
    congelados: ['carne']
}
const laticinios = {
    name: "Laticinios",
    laticinios: ['queijo']
}
const cereais = {
    name: "Cereais",
    cereais: ['arroz']
}

let listaDeCompras = [laticinios, cereais, doces, congelados, frutas]

const categorias = {}
function adicionarItem(categoria, item) {
    if (!categorias[categoria]) {
        categorias[categoria] = []; // Inicializa a categoria se ainda não existir
    }

    categorias[categoria].push(item); // Adiciona o item à categoria
}



// frutas.frutas.push('morango')
// console.log(frutas.name + ':' + frutas.frutas)


const yes = document.getElementById('sim')
const no = document.getElementById('nao')
const buttonAdd = document.createElement('button')
let novoItem = ''
const paragrafoEinput = document.getElementById('paragEinput')
const selectCategorias = document.getElementById('selectCategorias')


yes.addEventListener('change', () => {
    paragrafoAdicionarAlimento.innerText = 'Qual item você deseja adicionar?'
    const inputItem = document.createElement('input')
    paragrafoEinput.appendChild(inputItem)
    inputItem.style.marginBottom = '12px'
    inputItem.setAttribute('id', 'inputItem')
    inputItem.focus()

    selectCategorias.style.display ='block'
   
    body.appendChild(buttonAdd)
    buttonAdd.style.display = 'block'
    buttonAdd.textContent = 'Ok'
    buttonAdd.setAttribute('id', 'addButton')

    buttonAdd.addEventListener('click', () => {
        if(selectCategorias.value == '') {
            alert("Escolha uma categoria para adicionar o item:")
        }else{

            novoItem = inputItem.value
          
            
            adicionarItem(selectCategorias.value, novoItem);
            console.log(categorias);
    
            inputItem.value = ''
            inputItem.focus()
        }
    })
})

no.addEventListener('change', () => {

    paragrafoAdicionarAlimento.innerText = 'Ok! Aqui está a sua lista de compras atualizada:'
    
    body.removeChild(inputItem)
    body.removeChild(buttonAdd)
})
export const buttonInicial = document.getElementById('buttonInicial')

const objeto = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
  };
  
  for (const prop in objeto) {
    console.log(`${prop}: ${objeto[prop]}`);
  }
  
                  
