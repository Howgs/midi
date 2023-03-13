function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

const tecla = listaDeTeclas[contador];

//classList é a lista que podemos acessar dentro de um elemento da lista, ex: "Lista[1].classlist"
const instrumento = tecla.classList[1];

console.log(instrumento)

//tamplete String
const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    contador = contador + 1;

    console.log(contador);
}


