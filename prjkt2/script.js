function prepararImpressao() {
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;
    var valor = document.getElementById('valor').value;
    var pagamento = document.getElementById('pagamento').value;

    var conteudo = `
        <h1>Informações do Formulário</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Valor:</strong> R$ ${valor}</p>
        <p><strong>Método de Pagamento:</strong> ${pagamento}</p>
    `;

    if (pagamento === 'dinheiro') {
        var troco = document.getElementById('troco').value;
        conteudo += `<p><strong>Valor para Troco:</strong> R$ ${troco}</p>`;
    }

    // Exibir conteúdo na div antes da impressão
    document.getElementById('conteudoParaImpressao').innerHTML = conteudo;

    // Exibir a janela de impressão
    printJS({
        printable: 'conteudoParaImpressao',
        type: 'html',
        showModal: true,
        modalMessage: 'Preparando o documento para impressão...',
        documentTitle: 'Formulário de Informações',
        onPrintDialogClose: function () {
            alert('Impressão concluída com sucesso!');
        }
    });
}
