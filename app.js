function botaoCopiar() {
    document.querySelector('.botao__copiar').style.display = 'block';
}

// Função para criptografar o texto
function criptografar() {
    let texto = document.getElementById('inputTexto').value;
    if (texto.trim() !== "") {
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    document.getElementById('resultadoTexto').innerText = textoCriptografado;
    mostrarResultado();
} else {
    esconderResultado();
}}



// Função para descriptografar o texto
function descriptografar() {
    let texto = document.getElementById('inputTexto').value;
    if (texto.trim() !== "") {
    let descriptografar = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    document.getElementById('resultadoTexto').innerText = descriptografar;
    mostrarResultado();
} else {
    esconderResultado();
}}

// esconder o texto inicial
function esconderResultado(img, textoInicial) {
    let x = document.getElementById('img');
    let y = document.getElementById('textoInicial');
    if (x.style.display === block) {
        x.style.display = none;
    } else {
        x.style.display = "block";
      } if (y.style.display === block) {
        y.style.display = none;
    } else {
        y.style.display = "block";
      }
    }

function botaoCopiar(botaoCopiar) {
    document.getElementById('botaoCopiar').style.display = 'none';
}

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
