const NUMERI = document.querySelectorAll('.input');
const BOTTONE = document.getElementById('bottone');
const RISULTATO = document.getElementById('result');

function esegui(){
    let somma = 0;
    somma = NUMERI[0].value + NUMERI[1].value;
    RISULTATO.innerHTML = somma;
}

BOTTONE.addEventListener('click', esegui);

