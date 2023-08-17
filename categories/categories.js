// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Lista de Compras</title>
// </head>
// <body>
// <h1>Lista de Compras</h1>

// <label for="item">Novo Item:</label>
// <input type="text" id="item" placeholder="Digite um item">
// <label for="categoria">Categoria:</label>
// <select id="categoria">
//   <option value="alimentos">Alimentos</option>
//   <option value="limpeza">Limpeza</option>
//   <option value="higiene">Higiene</option>
// </select>
// <button id="adicionar">Adicionar</button>

// <h2>Itens na Lista:</h2>
// <ul id="lista"></ul>

// <script>
// document.addEventListener("DOMContentLoaded", function() {
//   const adicionarButton = document.getElementById("adicionar");
//   const itemInput = document.getElementById("item");
//   const categoriaSelect = document.getElementById("categoria");
//   const listaUl = document.getElementById("lista");

//   adicionarButton.addEventListener("click", function() {
//     const novoItem = itemInput.value;
//     const categoriaSelecionada = categoriaSelect.value;

//     if (novoItem !== "") {
//       const novoItemLi = document.createElement("li");
//       novoItemLi.textContent = `${novoItem} - ${categoriaSelecionada}`;
      
//       listaUl.appendChild(novoItemLi);

//       itemInput.value = ""; // Limpar o campo de entrada
//     }
//   });
// });
// </script>
// </body>
// </html>
