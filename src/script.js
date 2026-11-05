/*document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("contador-carrinho");
    const botoesAdicionar = document.querySelectorAll(".btn-addCar");

    const itensSalvos = localStorage.getItem("quantidadeCarrinho");
    let quantidadeCarrinho = itensSalvos ? parseInt(itensSalvos, 10) : 0;

    if (contador) {
        contador.textContent = quantidadeCarrinho;
    }

    botoesAdicionar.forEach((botao) => {
        botao.addEventListener("click", () => {

            quantidadeCarrinho++;

            if (contador) {
                contador.textContent = quantidadeCarrinho;
            }

            localStorage.setItem("quantidadeCarrinho", quantidadeCarrinho);

            const textoOriginal = botao.textContent;
            botao.textContent = "Adicionado";
            botao.disabled = true;

            setTimeout(() => {
                botao.textContent = textoOriginal;
                botao.disabled = false;
            }, 300);

        })
    });

});*/

document.addEventListener("DOMContentLoaded", () => {
  const contador = document.getElementById("contador-carrinho");
  const botoesAdicionar = document.querySelectorAll(".btn-addCarAll, .btn-addCar");

  // Obtém os produtos salvos ou inicializa array vazio
  function obterCarrinho() {
    return JSON.parse(localStorage.getItem("itensCarrinho")) || [];
  }

  // Atualiza o número exibido no badge do cabeçalho
  function atualizarBadge() {
    if (!contador) return;
    const carrinho = obterCarrinho();
    const totalUnidades = carrinho.reduce((acumulado, item) => acumulado + item.quantidade, 0);
    contador.textContent = totalUnidades;
  }

  atualizarBadge();

  botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Localiza o card pai (funciona tanto na vitrine quanto na página de detalhe)
      const containerProduto = botao.closest(".produto-item") || botao.closest(".produto-detalhe-container") || botao.closest(".produto-detalhe-card");

      if (!containerProduto) return;

      // Extrai os dados do produto no HTML
      const tituloElemento = containerProduto.querySelector(".produto-titulo") || containerProduto.querySelector("h1") || containerProduto.querySelector("h2");
      const precoElemento = containerProduto.querySelector(".preco, .preco-detalhe");
      const imgElemento = containerProduto.querySelector("img");

      const titulo = tituloElemento ? tituloElemento.textContent.trim() : "Produto MyCare";
      const imgUrl = imgElemento ? imgElemento.getAttribute("src") : "";
      
      // Converte "R$ 89,90" -> 89.90
      let precoNumerico = 0;
      if (precoElemento) {
        const textoPrecoLimpo = precoElemento.textContent.replace("R$", "").replace(".", "").replace(",", ".").trim();
        precoNumerico = parseFloat(textoPrecoLimpo) || 0;
      }

      // Adiciona ou incrementa no carrinho
      const carrinho = obterCarrinho();
      const itemExistente = carrinho.find((item) => item.nome === titulo);

      if (itemExistente) {
        itemExistente.quantidade += 1;
      } else {
        carrinho.push({
          nome: titulo,
          preco: precoNumerico,
          imagem: imgUrl,
          quantidade: 1
        });
      }

      // Salva no localStorage e atualiza o badge
      localStorage.setItem("itensCarrinho", JSON.stringify(carrinho));
      atualizarBadge();

      // Feedback visual rápido no botão
      const textoOriginal = botao.textContent;
      botao.textContent = "Adicionado ✓";
      botao.disabled = true;

      setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.disabled = false;
      }, 400);
    });
  });
});


