function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

const tecla = listaDeTeclas[contador];

//classList é a lista que podemos acessar dentro de um elemento da lista, ex: "Lista[1].classlist"
const instrumento = tecla.classList[1];

//console.log(instrumento)

//tamplete String
const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //console.log(contador);

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add('ativa');
        
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }

}

