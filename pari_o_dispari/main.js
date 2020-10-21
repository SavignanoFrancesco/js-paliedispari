//Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)


//variabili utente
var num1, word1;

//chiedo allutente un numero da 1 a 5
do {
    num1 = parseInt(prompt('Inserire un numero da 1 a 5: '));

    if (num1 < 1 || num1 > 5 || isNaN(num1)) {
        alert('Inserimento sbagliato...');
    }

} while (num1 < 1 || num1 > 5 || isNaN(num1));

//richiesta pari o dispari all'utente
do {
    word1 = prompt('Inserire pari o dispari: ');

    if (word1 != 'pari' && word1 != 'dispari') {
        alert('Inserimento sbagliato...');
    }

} while (word1 != 'pari' && word1 != 'dispari');
