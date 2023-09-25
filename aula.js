var enviandoComoAtendente = true;

function alternarTipoMensagem() {
    enviandoComoAtendente = !enviandoComoAtendente;
    var botaoAlternar = document.getElementById("botao-alternar");
    botaoAlternar.textContent = enviandoComoAtendente ? "Alternar para Cliente" : "Alternar para Atendente";
}

function verificarEnter(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
}

function enviarMensagem() {
    var mensagemInput = document.getElementById("mensagem-input");
    var mensagem = mensagemInput.value;

    if (mensagem.trim() !== "") {
        var chatMensagem = document.getElementById("chat-mensagem");
        var mensagemElement = document.createElement("div");
        mensagemElement.className = enviandoComoAtendente ? "mensagem enviada" : "mensagem recebida";
        var paragrafo = document.createElement("p");
        paragrafo.textContent = mensagem;
        mensagemElement.appendChild(paragrafo);
        chatMensagem.appendChild(mensagemElement);

        // Limpar o campo de entrada
        mensagemInput.value = "";

        // Rolar automaticamente para a última mensagem
        chatMensagem.scrollTop = chatMensagem.scrollHeight;
    }
}