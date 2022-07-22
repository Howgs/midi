function tocaPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaClap () { 
    document.querySelector('#som_tecla_clap').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaPom;