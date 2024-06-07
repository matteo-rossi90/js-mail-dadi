/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio 
appropriato sull’esito del controllo */

/////////////////////////////////////////////////////////////////////////

//dichiarare la variabile messaggio
let message;
let content = document.getElementById("text-message");

//selezionare la classe del form di input

const inputMail = document.querySelector('.mail');

//creare un'array che contiene una serie di mail
const listMail = ["chicco@gmail.com", "anastasia@gmail.com", "patrizio.bellotto@hotmail.it",
                "teresa67@hotmail.it", "marialasuperba@gmail.com", "antonio87@yahoo.it"];
console.log(listMail);

//creare listener che permette all'utente di immettere 
//l'input della mail

const sendButton = document.querySelector('.send');

sendButton.addEventListener('click', 
    function(){

        //chiedere all'utente la mail
        let inputValue = inputMail.value;

        console.log(inputValue);

        //estrarre i nomi delle mail

        for (let i = 0; i < listMail.length; i++) {

            let elementList = listMail[i];

            //confrontare il dato immesso dall'utente con quelli della lista
            if (inputValue === elementList) {
                message = 'La mail che hai inserito corrisponde';// se la mail è valida, comunicare all'utente che è valida
                content.innerHTML = message;
                console.log(message);
            } else {
                message = 'La mail che hai inserito non corrisponde';//altrimenti comunicare che la mail non è valida
                content.innerHTML = message;
                console.log(message);
            }

        }

    }
)
