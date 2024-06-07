/*Generare un numero random da 1 a 6, sia per il 
giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto */

///////////////////////////////////////////////////////////////

//variabile globale del messaggio da generare
let message;

//genera un numero random per il pc
let min = 1;
let max = 7;
let numPC = Math.floor(Math.random()* (max - min) + min);

console.log('Il numero generato dal pc è: '+ numPC);

//creare comando che consente al bottone di generare un numero 
//automatico per il giocatore

const button = addEventListener('click',
    function(){

        let numPlayer = parseInt(Math.floor(Math.random() * (max - min) + min));
        console.log('Il numero generato dal giocatore è: ' + numPlayer);

        //selezionare il contenitore che riceverà il messaggio
        const content = document.querySelector('.container-box');

        //creare un contenitore in container-box
        let messageBox = document.createElement('div');
        content.append(messageBox);

        //stabilire il vincitore in base al punteggio

        if (numPlayer > numPC) {// se giocatore > PC comunicare al giocatore che ha vinto

            message = 'Hai vinto!!!';
            messageBox.append(message);
            console.log(message);

        } else if (numPlayer === numPC) {// se giocatore = PC comunicare che non c'è nessun vincitore
            message = 'Nessun vincitore. E vabbeh, capita!'
            messageBox.append(message);
            console.log(message);
        } else { // altrimenti comunicare che ha perso
            message = 'Hai perso! Ma non ti vergogni?';
            messageBox.append(message);
            console.log(message);
        }                                                                  

    }
    
);

