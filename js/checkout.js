let prodCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const totalDiv = document.querySelector(".linha-valor.total");
let id = 0;
let total = 0;
let spanTotal = document.createElement("span");
spanTotal.id = "total-checkout";
spanTotal.innerHTML = `R$ ${total},00`;
totalDiv.append(spanTotal);

let buttonFinalizar = document
  .querySelector("#btn-finalizar-compra")
  .addEventListener("click", () => {
    pegarDados();
  });

window.onload = () => {
  carregarPedidos();
};

function carregarPedidos() {
  let listaItens = document.querySelector(".lista-itens-checkout");

  listaItens.innerHTML = "";
  total = 15;

  prodCarrinho.forEach((produto) => {
    let itemCarrinho = document.createElement("div");
    itemCarrinho.classList.add("item-no-carrinho");
    itemCarrinho.dataset.id = produto.id;

    let itemDetalhe = document.createElement("div");
    itemDetalhe.classList.add("item-detalhes");

    let spanNome = document.createElement("span");
    spanNome.classList.add("item-nome");
    spanNome.innerHTML = produto.nome;

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

    total = total + produto.preco * (produto.quantidade || 1);

    spanTotal.innerHTML = `R$ ${total},00`;

    btnRemover.addEventListener("click", () => {
      removerItem(produto.id, spanTotal);
    });

    itemDetalhe.append(spanNome, spanPreco);
    itemQtd.append(spanQtd, btnRemover);

    itemCarrinho.append(itemDetalhe, itemQtd);
    listaItens.append(itemCarrinho);
  });
}

function removerItem(idAtual, span) {
  let itemCarrinho = document.querySelector(
    `.item-no-carrinho[data-id="${idAtual}"]`
  );

  if (itemCarrinho) {
    let totalC = itemCarrinho.querySelector(".controles-quantidade");
    let totalQtd = totalC.querySelector("span").textContent.trim();
    totalQtd = Number(totalQtd.replace(/\D/g, "")) || 1;

    let preco = itemCarrinho.querySelector(".item-preco").textContent.trim();
    preco = preco.replace(",", ".");
    let apenasNumerosPreco = preco.replace(/[^0-9.]/g, "");
    let valorPreco = Number(apenasNumerosPreco) || 0;
    itemCarrinho.remove();
    total = total - valorPreco * totalQtd;
    span.innerHTML = `R$ ${total},00`;
  }

  prodCarrinho = prodCarrinho.filter((item) => item.id !== idAtual);
  carregarPedidos();
  localStorage.setItem("carrinho", JSON.stringify(prodCarrinho));
}

function pegarDados() {
  let inputNome = document.querySelector("#inputNome").value;
  let inputCep = document.querySelector("#cep").value;
  let inputNumero = document.querySelector("#inputNum").value;
  let inputEndereco = document.querySelector("#inputEnd").value;
}

const botaoBoleto = document
  .querySelector('[data-metodo="boleto"]')
  .addEventListener("click", () => {
    let btnAtivo = document.querySelector(".ativo");
    btnAtivo.classList.remove("ativo");

    let btnBoleto = document.querySelector('[data-metodo="boleto"]');
    btnBoleto.classList.add("ativo");

    let areaBoleto = document.querySelector("#area-boleto");
    areaBoleto.classList.remove("escondido");

    let areaCartao = document.querySelector("#area-cartao");
    areaCartao.classList.add("escondido");

    let areaPix = document.querySelector("#area-pix");
    areaPix.classList.add("escondido");
  });

const botaoCartao = document
  .querySelector('[data-metodo="cartao"]')
  .addEventListener("click", () => {
    let btnAtivo = document.querySelector(".ativo");
    btnAtivo.classList.remove("ativo");

    let btnCartao = document.querySelector('[data-metodo="cartao"]');
    btnCartao.classList.add("ativo");

    let areaCartao = document.querySelector("#area-cartao");
    areaCartao.classList.remove("escondido");

    let areaPix = document.querySelector("#area-pix");
    areaPix.classList.add("escondido");

    let areaBoleto = document.querySelector("#area-boleto");
    areaBoleto.classList.add("escondido");
  });

const botaoPix = document
  .querySelector('[data-metodo="pix"]')
  .addEventListener("click", () => {
    let btnAtivo = document.querySelector(".ativo");
    btnAtivo.classList.remove("ativo");

    let btnPix = document.querySelector('[data-metodo="pix"]');
    btnPix.classList.add("ativo");

    let areaPix = document.querySelector("#area-pix");
    areaPix.classList.remove("escondido");

    let areaCartao = document.querySelector("#area-cartao");
    areaCartao.classList.add("escondido");

    let areaBoleto = document.querySelector("#area-boleto");
    areaBoleto.classList.add("escondido");
  });
