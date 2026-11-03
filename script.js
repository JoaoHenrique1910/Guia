document.addEventListener('DOMContentLoaded', () => {
    const buscaInput = document.getElementById('buscaInput');
    const cartoes = document.querySelectorAll('.cartaoComando');
    const botoesCopiar = document.querySelectorAll('.btnCopiar');

    if (buscaInput) {
        buscaInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            
            cartoes.forEach(cartao => {
                const comando = cartao.querySelector('.comandoTexto').textContent.toLowerCase();
                const descricao = cartao.querySelector('p').textContent.toLowerCase();
                
                if (comando.includes(termo) || descricao.includes(termo)) {
                    cartao.style.display = 'flex';
                } else {
                    cartao.style.display = 'none';
                }
            });
        });
    }

    botoesCopiar.forEach(botao => {
        botao.addEventListener('click', () => {
            const comando = botao.parentElement.querySelector('.comandoTexto').textContent;
            
            navigator.clipboard.writeText(comando).then(() => {
                const textoOriginal = botao.textContent;
                botao.textContent = 'Copiado!';
                botao.style.backgroundColor = '#00ff66';
                botao.style.color = '#000';
                
                setTimeout(() => {
                    botao.textContent = textoOriginal;
                    botao.style.backgroundColor = 'transparent';
                    botao.style.color = '#ff3333';
                }, 2000);
            });
        });
    });
});