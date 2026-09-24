# 🛍️ MyCare - E-Commerce & Site Institucional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap Icons](https://img.shields.io/badge/Bootstrap%20Icons-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-yellow?style=for-the-badge)
![Etapa](https://img.shields.io/badge/ETAPA-PARTE%202%3A%20ESTILIZA%C3%87%C3%83O-blue?style=for-the-badge)

Bem-vindo ao repositório do **MyCare**! Este projeto é um website institucional e e-commerce estático desenvolvido para a apresentação e simulação de vendas de produtos de autocuidado, cosméticos naturais e *skincare* (serum facial, esfoliante corporal, creme noturno, bruma revitalizante, máscara de argila e bálsamo labial).

> 🎓 **Projeto Acadêmico & Finalidade de Estudo:**  
> Este projeto foi idealizado e construído exclusivamente para fins educacionais e aprendizado prático de desenvolvimento web front-end.  
>  
> 📌 **Histórico de Desenvolvimento:**  
> - **Parte 1 (Concluída):** Estruturação inicial do site utilizando apenas **HTML5** puro e semântico.  
> - **Parte 2 (Atual):** Aplicação de estilos com **CSS3**, organização em *CSS Grid* e *Flexbox*, padronização visual dos cartões de produtos, remoção de opacidades indesejadas no *hover*, responsividade e construção de 6 páginas individuais de detalhes dos produtos.

---

## 📌 Sumário

- [📖 Visão Geral](#-visão-geral)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📄 Documentação das Páginas](#-documentação-das-páginas)
  - [1. Página Inicial (index.html)](#1-página-inicial-indexhtml)
  - [2. Catálogo de Produtos (produtos.html)](#2-catálogo-de-produtos-produtoshtml)
  - [3. Detalhes dos Produtos (produtos/produto1.html a produto6.html)](#3-detalhes-dos-produtos-produtosproduto1html-a-produto6html)
  - [4. Contato e Atendimento (contato.html)](#4-contato-e-atendimento-contatohtml)
- [🛠️ Tecnologias e Recursos Utilizados](#️-tecnologias-e-recursos-utilizados)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [🔮 Próximos Passos](#-próximos-passos)
- [📷 Créditos de Mídia](#-créditos-de-mídia)
- [📝 Licença](#-licença)

---

## 📖 Visão Geral

O **MyCare** foi projetado para entregar uma experiência de compras e navegação fluida, moderna e acolhedora no segmento de cosméticos sustentáveis. 

Com a reestruturação da **Parte 2**, foram integradas diversas melhorias de layout e usabilidade:
- **Cabeçalho Fixo e Unificado:** Logo institucional, links de navegação entre as abas e botão com ícone do carrinho via *Bootstrap Icons*.
- **Grid de Produtos Uniforme:** Alinhamento perfeito dos cards utilizando `align-items: stretch` no *CSS Grid* e `margin-top: auto` no preço, garantindo que todos os cartões mantenham a mesma altura independente do número de linhas do título.
- **Correção de Transparência no Hover:** Remoção de regras que deixavam imagens e textos esbranquiçados/desbotados ao passar o cursor, garantindo 100% de nitidez visual.
- **Páginas Internas de Detalhes:** Layout modular em card com foto do produto em destaque ampliado (`max-width: 450px`), seções de descrição, lista de benefícios e botão de compra.

---

## 📁 Estrutura do Projeto
```text
loja_produtos/
├── css/
│   └── style.css            # Estilos customizados, layout Flexbox/Grid e resets
├── imagens/
│   ├── banners/             # Logo da marca e banners da loja
│   └── produtos/            # Pastas com as fotos dos produtos
│       ├── serum/           # Produto 1: Serum Facial
│       ├── esfoliante/      # Produto 2: Esfoliante Corporal
│       ├── creme/           # Produto 3: Creme Noturno
│       ├── bruma/           # Produto 4: Bruma Facial
│       ├── mascara/         # Produto 5: Máscara de Argila
│       └── balsamo/         # Produto 6: Bálsamo Labial
├── produtos/                # Páginas de detalhes individuais dos produtos
│   ├── produto1.html        # Serum Facial Iluminador
│   ├── produto2.html        # Esfoliante Corporal Renovador
│   ├── produto3.html        # Creme Noturno Nutritivo
│   ├── produto4.html        # Bruma Facial Revitalizante
│   ├── produto5.html        # Máscara Facial Argila Branca
│   └── produto6.html        # Bálsamo Labial Reparador
├── index.html               # Página inicial do site
├── produtos.html            # Catálogo completo de produtos MyCare
├── contato.html             # Formulário de atendimento ao cliente
└── README.md                # Documentação oficial do repositório
```


## 📄 Documentação das Páginas

### 1. Página Inicial (`index.html`)
- **Barra de Navegação (`<header>` / `<nav>`):** Apresenta a identidade visual da MyCare, links direcionais para as páginas principais e botão de acionamento do carrinho de compras.
- **Apresentação Institucional:** Banner de boas-vindas com a proposta da marca e direcionamento rápido para a área do catálogo.

### 2. Catálogo de Produtos (`produtos.html`)
- **Grid System Responsivo:** Layout organizado em colunas flexíveis que ajusta os produtos em tela.
- **Cartões de Produtos:** Exibe imagem centralizada, título com destaque visual, preço fixado ao rodapé do card e botão direto de acesso aos detalhes.

### 3. Detalhes dos Produtos (`produtos/produto1.html` a `produto6.html`)
- **Layout de Destaque Lado a Lado:**
  - **Área da Imagem:** Exibição ampliada da embalagem (`max-width: 450px`) centralizada sobre um card estilizado.
  - **Bloco de Informações:** Título principal (`<h1>`), preço destacado, descrição semântica do produto e lista de benefícios em tópicos.
  - **Ação:** Botão de compra estilizado ("Adicionar ao Carrinho").

### 4. Contato e Atendimento (`contato.html`)
- **Formulário de Suporte:** Interface limpa com campos de Nome, E-mail e Mensagem para simulação de comunicação com o cliente.
- **Padronização:** Preserva exatamente a mesma identidade visual, cabeçalho e rodapé do restante do ecossistema.

---

## 🛠️ Tecnologias e Recursos Utilizados

- **HTML5:** Estruturação semântica e acessível do conteúdo (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3:** Estilização customizada avançada, utilização de *Flexbox*, *CSS Grid*, regras de responsividade (`@media`), resets e animações de transição.
- **Bootstrap Icons (v1.11.3):** Biblioteca de ícones vetoriais integrados via CDN para a interface do carrinho.
- **VS Code & Live Server:** Ambiente de desenvolvimento e pré-visualização em tempo real.

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone (git clone https://github.com/VitorAssalin/mycare-css-stylesheet.git)
   

2. **Acessar o diretório do projeto:**
    ```bash
    cd mycare-css-stylesheet

3. **Executar no Navegador:**

- Abra o arquivo index.html ou produtos.html diretamente em qualquer navegador (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).

- Dica: No VS Code, utilize a extensão Live Server para rodar um servidor local com recarregamento automático.

4. **Demonstração Online (GitHub Pages):**
   - [Acessar MyCare no GitHub Pages](https://vitorassalin.github.io/mycare-css-stylesheet/
)

---

## 🔮 Próximos Passos
- Desenvolver interatividade em JavaScript para adicionar/remover produtos do carrinho.

- Adicionar contador numérico (badge) sobre o ícone do carrinho no cabeçalho.

- Criar modal de confirmação ou página de feedback após o envio do formulário de contato.

- Implementar menu hambúrguer responsivo para telas pequenas/celulares.

---

## 📷 Créditos de Mídia
- Imagens dos Produtos e Banners: Produzidas e/ou organizadas por IA exclusivamente para fins educacionais de simulação de catálogo de cosméticos.

- Ícones: Bootstrap Icons.

---

## 📝 Licença

Este projeto é totalmente livre de licenças comerciais por se tratar de um trabalho acadêmico. Livre para reutilização, estudos e consultas.

Desenvolvido para fins educacionais — MyCare © 2026
