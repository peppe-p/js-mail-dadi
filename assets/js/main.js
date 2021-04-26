//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
utenti_registrati = ["paolo@gmail.com", "mario@gmail.com", "dario@gmail.com"];
var registrato = false;
var login = prompt("Inserisci la tua email:");

if (utenti_registrati.includes(login)) {
    alert("Benvenuto, puoi accedere al gioco!")
    registrato = true;
} else {
    alert("Non sei registrato, mi dispiace!")
}

//Gioco dei dadi


//Stabilire il vincitore, in base a chi fa il punteggio più alto.
