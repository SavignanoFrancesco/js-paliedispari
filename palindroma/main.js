//1)Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

//chiedo una parola all'utente
var word = prompt('Inserisci una parola per verificare se è palindroma: ');

//richiamo la funzione per verificare se la parola inserita è palindroma
if (reverseString(word)){
    console.log(word + ' è palindroma!');
}else{
    console.log(word + ' NON è palindroma!');
}

//funzione che controlla se una stringa è palindroma
function reverseString(string) {

    //trasformo tutte le lettere della stringa in minuscolo
    string = string.toLowerCase();

    // trasforma la stringa in un array
    var splittedString = string.split("");

    //inverte gli elementi dell'array
    var reversedArray = splittedString.reverse();

    // trasforma l'array in una stringa
    var joinedArray = reversedArray.join("");

    if (joinedArray == string){
        return true;
    }else{
        return false;
    }
}
