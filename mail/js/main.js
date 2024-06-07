/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio 
appropriato sull’esito del controllo */

/////////////////////////////////////////////////////////////////////////

//creare un messaggio
let message;

//chiedere all'utente la mail
let inputMail = prompt('Scrivi la tua mail');

console.log(inputMail);

//creare un'array che contiene una serie di mail

const listMail = ["chicco@gmail.com", "anastasia@gmail.com", "patrizio.bellotto@hotmail.it", 
"teresa67@hotmail.it", "marialasuperba@gmail.com", "antonio87@yahoo.it"];

console.log(listMail);

//estrarre i nomi delle mail

for(let i = 0; i < listMail.length; i++){

    let elementList = listMail[i];

    //confrontare il dato immesso dall'utente con quelli della lista
    if (inputMail === elementList) {
        message = 'La mail che hai inserito corrisponde';// se la mail è valida, comunicare all'utente che è valida
        console.log(message);
    } else {
        message = 'La mail che hai inserito non è tra quelle valide. Riprova';//altrimenti comunicare che la mail non è valida
        console.log(message);
    }

}