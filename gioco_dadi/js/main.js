/*Generare un numero random da 1 a 6, sia per il 
giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto */

///////////////////////////////////////////////////////////////

//variabile globale del messaggio da generare
let message;

//creare comando che consente al bottone di generare un numero 
//automatico per il giocatore

const button = addEventListener('click',
    function(){

        //genera un numero random per il pc
        let min = 1;
        let max = 7;
        let numPC = Math.floor(Math.random() * (max - min) + min);

        console.log('Il numero generato dal pc è: ' + numPC);

        //genera numero random per il giocatore

        let numPlayer = parseInt(Math.floor(Math.random() * (max - min) + min));
        console.log('Il numero generato dal giocatore è: ' + numPlayer);

        //selezionare il contenitore che riceverà il messaggio
        const content = document.querySelector('.container-box');

        //stabilire il vincitore in base al punteggio

        if (numPlayer > numPC) {// se giocatore > PC comunicare al giocatore che ha vinto

            //creare un contenitore in container-box
            message = 'Hai vinto!!!';
            content.innerHTML = message;
            console.log(message);

        } else if (numPlayer === numPC) {// se giocatore = PC comunicare che non c'è nessun vincitore
            
            //creare un contenitore in container-box
            message = 'Nessun vincitore. E vabbeh, capita!'
            content.innerHTML = message;
            console.log(message);

        } else { // altrimenti comunicare che ha perso
            
            //creare un contenitore in container-box
            message = 'Hai perso! Ma non ti vergogni?';
            content.innerHTML = message;
            console.log(message);
        }                                                                  

    }
    
);

