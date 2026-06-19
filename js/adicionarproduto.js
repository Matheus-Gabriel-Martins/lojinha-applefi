function salvarProduto() {
  const nome = document.querySelector("#nome-produto").value;
  const sub = document.querySelector("#sub-produto").value;
  const preco = Number(document.querySelector("#valor-produto").value);
  const imagem = document.querySelector("#imagem-produto").value;

  if (!nome || !sub || !preco || !imagem) {
    alert("Preencha todos os campos.");
    return;
  }

  const novoProduto = {
    id: Date.now(),
    nomeP: nome,
    sub: sub,
    preco: preco,
    linkImg: imagem,
    qtd: 0
  };

  const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtosSalvos.push(novoProduto);
  localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

  window.location.href = "lojinha.html";  
}

function inicializarCadastro() {
  const btnSalvar = document.querySelector("#btn-salvar-produto");
  if (btnSalvar) btnSalvar.addEventListener("click", salvarProduto);
}

inicializarCadastro();
