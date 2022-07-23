function tocaPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaClap () { 
    document.querySelector('#som_tecla_clap').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0



while (contador < listaDeTeclas.length) {
    
    listaDeTeclas[contador].onclick = tocaPom;

    contador = contador + 1

    console.log(contador)

}
