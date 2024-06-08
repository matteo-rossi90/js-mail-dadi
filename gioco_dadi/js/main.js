/*Generare un numero random da 1 a 6, sia per il 
giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto */

///////////////////////////////////////////////////////////////

//selezionare il contenitore che riceverà il messaggio
const contentText = document.querySelector('#message-text');
const contentPC = document.querySelector('#message-PC');
const contentPlayer = document.querySelector('#message-player');

//variabile globale del messaggio da comunicare al giocatore
let message;

//creare comando che consente al bottone di confrontare il numero 
//automatico generato dal pc con quello scelto dal giocatore

const resultButton = document.querySelector('.result');

resultButton = addEventListener('click',
    function(){

        //genera un numero random per il pc
        let min = 1;
        let max = 7;
        let numPC = Math.floor(Math.random() * (max - min) + min);
        console.log('Il numero generato dal pc è: ' + numPC);

        //genera un numero random per il giocatore
        let numPlayer = Math.floor(Math.random() * (max - min) + min); 
        console.log('Il numero generato dal giocatore è: ' + numPlayer);

        //creare messaggio che comunica il numero random della macchina
        let messagePC = 'Il numero generato automaticamente dal pc è: ' + numPC;

        //creare messaggio che comunica il numero random del giocatore
        let messagePlayer = 'Il numero generato automaticamente per il giocatore è: ' + numPlayer;

        //stabilire il vincitore in base al punteggio

        if (numPlayer > numPC) {// se giocatore > PC comunicare al giocatore che ha vinto

            //creare un'intestazione in container-box che comunichi al giocatore che ha vinto
            message = 'Hai vinto!!! Oggi è il tuo giorno fortunato';
            contentText.style.color = 'lime';

        } else if (numPlayer === numPC) {// se giocatore = PC comunicare che non c'è nessun vincitore

            //creare messaggio che comunichi al giocatore che non c'è vincitore
            message = 'Nessun vincitore. E vabbeh, capita!'
            contentText.style.color = 'blue';


        } else { // altrimenti comunicare che ha perso

            //creare messaggio che comunichi al giocatore che ha perso (e umiliarlo)
            message = 'Hai perso! Ma non ti vergogni?';
            contentText.style.color = 'red';
            
        }
        
        //inserire il messaggio in html
        contentText.innerHTML = message;
        contentPC.innerHTML = messagePC;
        contentPlayer.innerHTML = messagePlayer;
        console.log(message);

    }
    
);

