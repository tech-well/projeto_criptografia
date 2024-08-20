function trocarVogais(palavra) {
  palavra = palavra.replace(/a/g, 'ai');
  palavra = palavra.replace(/e/g, 'enter');
  palavra = palavra.replace(/i/g, 'imes');
  palavra = palavra.replace(/o/g, 'ober');
  palavra = palavra.replace(/u/g, 'ufat');
  return palavra;
}

function reverterVogais(palavra) {
  palavra = palavra.replace(/ai/g, 'a');
  palavra = palavra.replace(/enter/g, 'e');
  palavra = palavra.replace(/imes/g, 'i');
  palavra = palavra.replace(/ober/g, 'o');
  palavra = palavra.replace(/ufat/g, 'u');
  return palavra;
}

function criptografar() {
  let inputPalavra = document.getElementById("input__texto").value;
  let palavraModificada = trocarVogais(inputPalavra);
  document.querySelector(".container__box").style.background = "white";
  document.querySelector('.mostrarTexto').innerHTML = palavraModificada;
  document.querySelector('.copiar__h1' ).style.display = 'none'
  document.querySelector('.copiar__p' ).style.display = 'none'
}

function descriptografar() {
  let reverter = document.getElementById("input__texto").value;
  let palavraOriginal = reverterVogais(reverter);
  document.querySelector(".container__box").style.background = "white";
  document.querySelector('.mostrarTexto').innerHTML = palavraOriginal;
}

function copiar() {
  let Copiar = document.querySelector('.mostrarTexto').textContent;
  navigator.clipboard.writeText(Copiar)
}






