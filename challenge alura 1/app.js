// Função para criptografar o texto
function criptografar() {
    let texto = document.getElementById('inputTexto').value;
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    document.getElementById('resultadoTexto').innerText = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    let texto = document.getElementById('inputTexto').value;
    let textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    document.getElementById('resultadoTexto').innerText = textoDescriptografado;
}

// função para esconder a imagem e texto inicial de resultado

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    let textoCopiado = document.getElementById('resultadoTexto').innerText;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert('Texto copiado para a área de transferência');
        })
        .catch(err => {
            alert('Erro ao copiar texto: ', err);
        });
}
