document.addEventListener("DOMContentLoaded", () => {
  let quantidadeCarrinho = 0;

  const contador = document.getElementById("contador-carrinho");
  const botoesAdicionar = document.querySelectorAll(".btn-addCar");

  botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
      quantidadeCarrinho++;
      contador.textContent = quantidadeCarrinho;

      const textoOriginal = botao.textContent;
      botao.textContent = "Adicionado! ✓";
      botao.disabled = true;

      setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.disabled = false;
      }, 400);
    });
  });
});