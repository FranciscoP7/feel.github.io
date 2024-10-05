// Código para alterar o cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Seleciona o cabeçalho
    if (window.scrollY > 100) {
        // Caso o scroll seja maior que 100px
        header.style.position = 'absolute'; // Torna o cabeçalho absoluto
        header.style.top = '0'; // Posiciona no topo
        header.style.backgroundColor = 'transparent'; // Fundo transparente
        header.style.color = '#000'; // Muda a cor do texto
    } else {
        // Se não, mantém a posição fixa
        header.style.position = 'fixed'; // Cabeçalho fixo
        header.style.backgroundColor = '#004c8c'; // Fundo azul escuro
        header.style.color = '#fff'; // Texto branco
    }
});
