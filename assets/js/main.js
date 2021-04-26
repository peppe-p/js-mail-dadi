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
    var num_user = Math.floor(Math.random() * 6) + 1;
    var num_pc = Math.floor(Math.random() * 6) + 1;
    var risultato = document.getElementById("risultato");
    document.getElementById("user").innerHTML = num_user;
    document.getElementById("pc").innerHTML = num_pc;

    //Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (num_user > num_pc) {
        risultato.innerHTML = "Hai vinto!"

    } else if (num_user < num_pc) {
        risultato.innerHTML = "Mi dispiace, hai perso..."

    } else if (num_user == num_pc) {
        risultato.innerHTML = "Wow! Pareggio!"

    }


}

