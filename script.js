function verificaChecked(s, n) {
    if(s.checked) {
        alert('Sim')
    }else if(n.checked) {
        alert('Não')
    }
}

const frutas = []
const laticinios = []
const congelados = []
const doces  = []
const cereais = []

const yes = document.getElementById('sim')
const no = document.getElementById('nao')

verificaChecked(yes, no)
