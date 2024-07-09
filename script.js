document.addEventListener("DOMContentLoaded", function() {
    const botaoAnterior = document.getElementById('anterior');
    const botaoProximo = document.getElementById('proximo');
    const gradeVendas = document.querySelector('.vendas__grade');
    const larguraContainer = gradeVendas.clientWidth;
    const numeroColunas = 2;
    const larguraItem = larguraContainer / numeroColunas;
    let posicaoRolagem = 0;
    let contadorProdutos = 0; // Variável para contar produtos na sacola

    // Função para buscar e exibir produtos
    function fetchProducts() {
        // Simulação de dados (substitua pela sua lógica de API real)
        const produtos = [
            { nome: 'Batom Encanto de Perséfone', preco: 'R$16,80', desconto: 'R$42,00', imagem: 'imagens/produto-1.png' },
            { nome: 'Base Olhos de Morrigan', preco: 'R$32,00', desconto: 'R$80,00', imagem: 'imagens/produto-2.png' },
            { nome: 'Batom Asas de Fadas', preco: 'R$61,20', desconto: 'R$102,00', imagem: 'imagens/produto-3.png' },
            { nome: 'Base Magia de Circe', preco: 'R$67,12', desconto: 'R$108,00', imagem: 'imagens/produto-4.png' },
            { nome: 'Pincel Arco de Artemis', preco: 'R$19,20', desconto: 'R$32,00', imagem: 'imagens/produto-5.png' },
            { nome: 'Sérum Brilho de Freya', preco: 'R$112,00', desconto: 'R$140,00', imagem: 'imagens/produto-6.png' }
        ];

        gradeVendas.innerHTML = '';

        produtos.forEach((produto, index) => {
            const coluna = document.createElement('div');
            coluna.classList.add('vendas__imagens');

            const imagemProduto = document.createElement('img');
            imagemProduto.src = produto.imagem;
            imagemProduto.alt = 'vendas';

            const detalhes = document.createElement('div');
            detalhes.classList.add('vendas__detalhes');

            const nomeProduto = document.createElement('p');
            nomeProduto.textContent = produto.nome;

            const preco = document.createElement('p');
            preco.classList.add('preco');
            preco.innerHTML = `<span>${produto.preco}</span> <del>${produto.desconto}</del>`;

            const botaoComprar = document.createElement('button');
            botaoComprar.classList.add('comprar');
            botaoComprar.textContent = 'Comprar';
            botaoComprar.addEventListener('click', () => {
                // Ação de compra (exemplo: incrementar contador de produtos na sacola)
                contadorProdutos++;
                atualizarContadorSacola();
                alert(`Produto ${produto.nome} adicionado à sacola.`);
            });

            detalhes.appendChild(nomeProduto);
            detalhes.appendChild(preco);
            detalhes.appendChild(botaoComprar);

            coluna.appendChild(imagemProduto);
            coluna.appendChild(detalhes);

            gradeVendas.appendChild(coluna);
        });
    }

    fetchProducts();

    // Evento para rolar para a esquerda
    botaoAnterior.addEventListener('click', function() {
        if (posicaoRolagem > 0) {
            posicaoRolagem -= larguraItem;
            gradeVendas.style.transform = `translateX(-${posicaoRolagem}px)`;
        }
    });

    // Evento para rolar para a direita
    botaoProximo.addEventListener('click', function() {
        if (posicaoRolagem < (gradeVendas.scrollWidth - larguraContainer)) {
            posicaoRolagem += larguraItem;
            gradeVendas.style.transform = `translateX(-${posicaoRolagem}px)`;
        }
    });

    // Função para atualizar o contador de produtos na sacola
    function atualizarContadorSacola() {
        const contadorElemento = document.getElementById('contador-sacola');
        if (contadorElemento) {
            contadorElemento.textContent = contadorProdutos.toString();
        }
    }
});
