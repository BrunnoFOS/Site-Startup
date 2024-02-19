/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const valorElement = document.getElementById('valor');
    const btnIncremento = document.getElementById('btn_incremento');
    const btnDecremento = document.getElementById('btn_decremento');
    let valor = 0;
    function atualizarValor() {
        valorElement.textContent = valor;
    }
    btnIncremento.addEventListener('click', function() {
        valor++;
        atualizarValor();
    });
    btnDecremento.addEventListener('click', function() {
        valor--;
        atualizarValor();
    });
    atualizarValor();
});
