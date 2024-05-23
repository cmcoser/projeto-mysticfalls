document.addEventListener("DOMContentLoaded", function() {
    const botaoAnterior = document.getElementById('anterior');
    const botaoProximo = document.getElementById('proximo');    
    const gradeVendas = document.querySelector('.vendas__grade');
    const larguraContainer = gradeVendas.clientWidth;
    const numeroColunas = 2;
    const larguraItem = larguraContainer / numeroColunas;
    let posicaoRolagem = 0;
    let numeroItensSacola = 0; 

    botaoAnterior.addEventListener('click', function() {
        if (posicaoRolagem > 0) {
            posicaoRolagem -= larguraItem;
            gradeVendas.style.transform = `translateX(-${posicaoRolagem}px)`;
        }
    });
    botaoProximo.addEventListener('click', function() {
        if (posicaoRolagem < (gradeVendas.scrollWidth - larguraContainer)) {
            posicaoRolagem += larguraItem;
            gradeVendas.style.transform = `translateX(-${posicaoRolagem}px)`;
        }
    });

    function atualizarContadorSegundos() {
        const quadradoSegundos = document.querySelector('.quadrado.segundos');
        let segundos = parseInt(quadradoSegundos.querySelector('span').textContent);
        if (segundos === 0) {
            segundos = 59;
        } else {
            segundos--; 
        }
        quadradoSegundos.querySelector('span').textContent = segundos;
    }
    setInterval(atualizarContadorSegundos, 1000);

    function adicionarProdutoASacola(produtoId) {
        numeroItensSacola++; 
        atualizarContadorSacola(); 
    }    

    const botoesAdicionar = document.querySelectorAll('.adicionar-sacola');
    botoesAdicionar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const produtoId = botao.getAttribute('data-produto-id');
            adicionarProdutoASacola(produtoId);
        });
    });

    function atualizarContadorSacola() {
        const contadorSacola = document.querySelector('.contador-sacola');
        contadorSacola.textContent = numeroItensSacola; 
    }
});
