//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
registered_users = ["paolo@gmail.com", "mario@gmail.com", "dario@gmail.com"];
var registered = false;
var login = prompt("Inserisci la tua email:");

if (registered_users.includes(login)) {
    alert("Benvenuto, puoi accedere al gioco!")
    registered = true;
} else {
    alert("Non sei registrato, mi dispiace!")
}

//Gioco dei dadi
if (registered == true) {
    //Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    var num_user = parseInt(prompt("Scegli un numero da 1 a 6"));
    var num_pc = Math.floor(Math.random() * 6) + 1;

    //Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (num_user > num_pc) {

    }


}

