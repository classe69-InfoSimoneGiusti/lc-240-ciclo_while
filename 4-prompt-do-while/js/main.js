// richiedo l'inserimento di un numero. In caso di inserimento di una stringa, chiedo di nuovo...

/* Metodo elegante e pulito */


let valore;

do {
    valore = parseInt(prompt('Inserisci un numero'));
} while (isNaN( valore ))

alert(valore);
 
 

/* Soluzione ingenua con while */

/* let secondoValore = parseInt(prompt('Inserisci un numero'));

while (isNaN(secondoValore)) {
    console.log('sono dentro al ciclo while');
    secondoValore = parseInt(prompt('Inserisci un numero'));
}

alert(secondoValore);
 */




/* solo per uso didattico ! */

/* 
let secondoValore = parseInt(prompt('Inserisci un numero'));

for ( ; isNaN(secondoValore);  ) {
    console.log('sono dentro al ciclo for');
    secondoValore = parseInt(prompt('Inserisci un numero'));
}

alert(secondoValore);
 */