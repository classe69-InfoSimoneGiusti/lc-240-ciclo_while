const lista =    [
                        "Latte",
                        "Uova",
                        "Pane",
                        "Zucchero",
                        "Farina",
                        "Pomodori"
                    ];

const listaDom = document.getElementById('lista-spesa');

for ( let i = 0; i < lista.length; i++ ) {

    listaDom.innerHTML += `<li>${lista[i]}</li>`;

}