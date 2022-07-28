function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0


while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1]

    const tecla = listaDeTeclas[contador]

//template string
    const idAudio = `#som_${instrumento}` 

    tecla.onclick = function () { 
        tocaSom(idAudio)
    }

    contador = contador + 1

    //console.log(contador)
    //console.log(instrumento)
   //console.log(idAudio)
}
