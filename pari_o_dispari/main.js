//Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

//DATI PARTITA
console.log('DATI PARTITA');
//variabili utente
var num1, word1;

//chiedo all'utente un numero da 1 a 5
do {
    num1 = parseInt(prompt('Inserire un numero da 1 a 5: '));
    console.log('user number: ' + num1);

    if (num1 < 1 || num1 > 5 || isNaN(num1)) {
        alert('Inserimento sbagliato...');
    }

} while (num1 < 1 || num1 > 5 || isNaN(num1));

//richiesta pari o dispari all'utente
do {
    word1 = prompt('Inserire pari o dispari: ');
    console.log('user word: ' + word1);

    if (word1 != 'pari' && word1 != 'dispari') {
        alert('Inserimento sbagliato...');
    }

} while (word1 != 'pari' && word1 != 'dispari');

//variabili avversario
var num2;

//generazione numero random tra 1 e 5
num2 = getRndInteger(1, 5);
console.log('random number generated: ' + num2);

//somma numero utente e numero avversario
var sum = num1 + num2;
console.log('sum: ' + sum);

//CONFRONTO E RISULTATO
console.log('CONFRONTO E RISULTATO');
//stampa a video il vincitore
challenge(sum, word1);

//FUNZIONI
//funzione random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//funzione isEven(controlla se è pari un numero)
function isEven(num){
    if (!(num % 2)) {
        return true;
    }else {
        return false;
    }
}

//funzione challenge(confronta la somma con la scelta dell'utente e stampa il risultato)
function challenge(sum, user_choice){
    //se vince user...
    if((isEven(sum) && (user_choice == 'pari')) || (!(isEven(sum)) && (user_choice == 'dispari'))){
        console.log('isEven:' + isEven(sum) + ' ' + 'User:'+ user_choice);
        console.log('Vince user!');
    }
    //se vince avversario...
    else if ((isEven(sum) && (user_choice == 'dispari')) || (!(isEven(sum)) && (user_choice == 'pari'))) {
        console.log('isEven:' + isEven(sum) + ' ' + 'User:'+ user_choice);
        console.log('Vince avversario!');
    }
    //errore
    else{
        alert('ops.. qualcosa è andato storto..')
    }
}
