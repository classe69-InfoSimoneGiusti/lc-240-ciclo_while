const lista =    [
                        "Latte",
                        "Uova",
                        "Pane",
                        "Zucchero",
                        "Farina",
                        "Pomodori"
                    ];

const listaDom = document.getElementById('lista-spesa');


stampaListaSpesa();

const aggiungiElementoDom = document.getElementById('aggiungiElemento');

aggiungiElementoDom.addEventListener('click', function() {

    const nuovoElementoDom = document.getElementById('nuovoElemento');
    const testo = nuovoElementoDom.value;
    lista.push(testo);
    listaDom.innerHTML = '';

    stampaListaSpesa();

});






function stampaListaSpesa () {
    let i = 0;

    while ( i < lista.length ) {
        const nuovoElementoLista = document.createElement('li'); // <li></li>
        nuovoElementoLista.innerText = lista[i];
        listaDom.append(nuovoElementoLista);
        //listaDom.innerHTML += `<li>${lista[i]}</li>`;
        i++;
    }
}

