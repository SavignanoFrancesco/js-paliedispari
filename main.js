//richiesta all'utente per scegliere di vedere es1 o es2
do{

    var exercise_choice = parseInt(prompt('Scegliere 1 per vedere il primo esercizio, scegliere 2 per vedere il secondo esercizio.'));

    if(exercise_choice != 1 && exercise_choice != 2){
        alert('Inserimento sbagliato...');
    }

}while(exercise_choice != 1 && exercise_choice != 2);

if (exercise_choice == 1) {
    //INIZIO ESERCIZIO 1
    console.log('___ESERCIZIO 1___');
    //1)Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

    //chiedo una parola all'utente
    var word = prompt('Inserisci una parola per verificare se è palindroma: ');

    //richiamo la funzione per verificare se la parola inserita è palindroma
    if (isPalindrome(word)){
        console.log(word + ' è palindroma!');
    }else{
        console.log(word + ' NON è palindroma!');
    }

    //funzione che controlla se una stringa è palindroma
    function isPalindrome(string) {

        //trasformo tutte le lettere della stringa in minuscolo
        string = string.toLowerCase();

        // trasforma la stringa in un array
        var splittedString = string.split("");

        //inverte gli elementi dell'array
        var reversedArray = splittedString.reverse();

        // trasforma l'array in una stringa
        var joinedArray = reversedArray.join("");

        //se la stringa iniziale è uguale a quella invertita, è VERO che è palindroma
        if (joinedArray == string){
            return true;
        }else{
            return false;
        }
    }
    //FINE ESERCIZIO 1
}else if (exercise_choice == 2) {
    //INIZIO ESERCIZIO 2
    console.log('___ESERCIZIO 2___');
    //Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

    //DATI PARTITA
    console.log('DATI PARTITA');
    //chiedo all'utente un numero da 1 a 5
    var num1 = askNumber();

    //richiesta pari o dispari all'utente
    var word1 = askEvenOrOdd();

    //generazione numero random tra 1 e 5
    var num2 = getRndInteger(1, 5);
    console.log('random number generated: ' + num2);

    //somma numero utente e numero avversario
    var sum = num1 + num2;
    console.log('sum: ' + sum);

    //CONFRONTO E RISULTATO
    console.log('CONFRONTO E RISULTATO');
    //confronta la somma con la scelta dell'utente e stampa il risultato
    challenge(sum, word1);

    //FUNZIONI
    //funzione askNumber(restituisce la scelta dell'utente)
    function askNumber(){
        do {
            number = parseInt(prompt('Inserire un numero da 1 a 5: '));
            console.log('user number: ' + number);

            if (number < 1 || number > 5 || isNaN(number)) {
                alert('Inserimento sbagliato...');
            }

        } while (number < 1 || number > 5 || isNaN(number));
        return number;
    }

    //funzione askEvenOrOdd(restituisce la scelta dell'utente)
    function askEvenOrOdd(){
        do {
            even_or_odd = prompt('Inserire pari o dispari: ');
            console.log('user word: ' + even_or_odd);

            if (even_or_odd != 'pari' && even_or_odd != 'dispari') {
                alert('Inserimento sbagliato...');
            }

        } while (even_or_odd != 'pari' && even_or_odd != 'dispari');
        return even_or_odd;
    }

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
    //FINE ESERCIZIO 2
}
else{
    alert('ops... qualcosa è andato storto...');
}
