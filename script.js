function trocarVogais(palavra) {
    palavra = palavra.replace(/a/g, 'ai');
    palavra = palavra.replace(/e/g, 'enter');
    palavra = palavra.replace(/i/g, 'imes');
    palavra = palavra.replace(/o/g, 'ober');
    palavra = palavra.replace(/u/g, 'ufat');
    return palavra;
}

function criptografar(){ 
        function peganome(){
        let inputPalavra = document.getElementById("input__texto").value;
        let palavraModificada = trocarVogais(inputPalavra);
        document.querySelector(".container__box").style.background = "none";
        document.querySelector(".container__box").style.background = 'white'
        document.querySelector('.mostrarTexto').innerHTML  =  palavraModificada
        
       }
     peganome()
  }

  function copiar(){
    
  }

    

    