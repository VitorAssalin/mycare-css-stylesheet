document.addEventListener("DOMContentLoaded", () => {
  const containerLista = document.getElementById("lista-carrinho");
  const elementoTotal = document.getElementById("preco-total");
  const resumoQuantidade = document.getElementById("resumo-quantidade");
  const btnLimpar = document.getElementById("btn-limpar");
  const badgeMenu = document.getElementById("contador-carrinho");

  function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function renderizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("itensCarrinho")) || [];

    // Se estiver vazio
    if (carrinho.length === 0) {
      containerLista.innerHTML = `
        <div class="alert alert-secondary text-center py-4">
          <i class="bi bi-cart-x fs-1 d-block mb-2"></i>
          Seu carrinho está vazio no momento.
          <br><a href="produtos.html" class="btn btn-primary btn-sm mt-3">Ver Produtos</a>
        </div>
      `;
      if (elementoTotal) elementoTotal.textContent = formatarMoeda(0);
      if (resumoQuantidade) resumoQuantidade.textContent = "0";
      if (badgeMenu) badgeMenu.textContent = "0";
      return;
    }

    containerLista.innerHTML = "";
    let valorTotal = 0;
    let totalUnidades = 0;

    // Constrói cada card dinamicamente
    carrinho.forEach((item, index) => {
      const subtotalItem = item.preco * item.quantidade;
      valorTotal += subtotalItem;
      totalUnidades += item.quantidade;

      const card = document.createElement("div");
      card.className = "card mb-3 p-3 shadow-sm border-0";
      card.innerHTML = `
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div class="d-flex align-items-center gap-3">
            <img src="${item.imagem}" alt="${item.nome}" style="width: 70px; height: 70px; object-fit: cover;" class="rounded border">
            <div>
              <h6 class="mb-1 fw-bold">${item.nome}</h6>
              <div class="text-muted small">Preço unitário: ${formatarMoeda(item.preco)}</div>
              <div class="text-muted small">Quantidade: <strong>${item.quantidade}</strong></div>
            </div>
          </div>
          <div class="text-end ms-auto">
            <div class="fw-bold mb-2 text-dark">${formatarMoeda(subtotalItem)}</div>
            <button class="btn btn-sm btn-outline-danger btn-remover" data-index="${index}">
              <i class="bi bi-trash"></i> Remover
            </button>
          </div>
        </div>
      `;

      containerLista.appendChild(card);
    });

    // Atualiza valores dos totais
    if (elementoTotal) elementoTotal.textContent = formatarMoeda(valorTotal);
    if (resumoQuantidade) resumoQuantidade.textContent = totalUnidades;
    if (badgeMenu) badgeMenu.textContent = totalUnidades;

    // Configura os botões de remover item individual
    const botoesRemover = document.querySelectorAll(".btn-remover");
    botoesRemover.forEach((botao) => {
      botao.addEventListener("click", () => {
        const indiceParaRemover = parseInt(botao.getAttribute("data-index"), 10);
        removerItem(indiceParaRemover);
      });
    });
  }

  // Remove uma linha específica do localStorage
  function removerItem(indice) {
    const carrinho = JSON.parse(localStorage.getItem("itensCarrinho")) || [];
    carrinho.splice(indice, 1);
    localStorage.setItem("itensCarrinho", JSON.stringify(carrinho));
    renderizarCarrinho();
  }

  // Limpa todo o carrinho no localStorage
  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      if (confirm("Deseja realmente esvaziar o carrinho?")) {
        localStorage.removeItem("itensCarrinho");
        renderizarCarrinho();
      }
    });
  }

  // Primeira renderização ao abrir a tela
  renderizarCarrinho();
});