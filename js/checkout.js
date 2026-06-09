const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
const totalDiv = document.querySelector(".linha-valor.total");
let total = 0;
let spanTotal = document.createElement("span");
spanTotal.id = "total-checkout";
spanTotal.innerHTML = `R$ ${total},00`;
totalDiv.append(spanTotal);

window.onload = () => {
  carregarPedidos();
};

function carregarPedidos() {
  let listaItens = document.querySelector(".lista-itens-checkout");

  listaItens.innerHTML = "";
  total = 0;

  produtosSalvos.forEach((produto, index) => {
    let itemCarrinho = document.createElement("div");
    itemCarrinho.classList.add("item-no-carrinho");

    let itemDetalhe = document.createElement("div");
    itemDetalhe.classList.add("item-detalhes");

    let spanNome = document.createElement("span");
    spanNome.classList.add("item-nome");
    spanNome.innerHTML = produto.nomeP || produto.nome;

    let spanPreco = document.createElement("span");
    spanPreco.classList.add("item-preco");
    spanPreco.innerHTML = `R$ ${produto.preco},00`;

    let itemQtd = document.createElement("div");
    itemQtd.classList.add("controles-quantidade");

    let spanQtd = document.createElement("span");
    spanQtd.innerHTML = `Qtd: ${produto.quantidade || 1}`;

    let btnRemover = document.createElement("button");
    btnRemover.classList.add("btn-remover-item");
    btnRemover.type = "button";
    btnRemover.innerHTML = `<i class="bx bx-trash"></i>`;

    total = total + (produto.preco * (produto.qtd || 1));

    spanTotal.innerHTML = `R$ ${total},00`;

    itemDetalhe.append(spanNome, spanPreco);
    itemQtd.append(spanQtd, btnRemover);

    itemCarrinho.append(itemDetalhe, itemQtd);
    listaItens.append(itemCarrinho);
  });
}
