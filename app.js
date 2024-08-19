// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    verificarTexto();
});

function criptografar() {
    let texto = document.getElementById("input-text").value;
    if (texto) {
        let textoCriptografado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("output-text").value = textoCriptografado;
        verificarTexto();
    }
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    if (texto) {
        let textoDescriptografado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("output-text").value = textoDescriptografado;
        verificarTexto();
    }
}

function copiarTexto() {
    let texto = document.getElementById("output-text").value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error("Erro ao copiar o texto: ", err);
        });
}

function verificarTexto() {
    const img = document.getElementById("img");
    const textoInicial = document.getElementById("textoInicial");
    const outputText = document.getElementById("output-text");
    const botaoCopiar = document.getElementById("botao-copiar");
    
    // Verifica se o textarea tem algum texto
    if (outputText.value.trim() !== "") {
        // Se tiver texto, esconde a imagem e o texto inicial, e mostra o textarea e o botão
        img.style.display = "none";
        textoInicial.style.display = "none";
        outputText.style.display = "block";
        botaoCopiar.style.display = "block";
    } else {
        // Se não tiver texto, mostra a imagem e o texto inicial, e esconde o textarea e o botão
        img.style.display = "block";
        textoInicial.style.display = "block";
        outputText.style.display = "none";
        botaoCopiar.style.display = "none";
    }
}
