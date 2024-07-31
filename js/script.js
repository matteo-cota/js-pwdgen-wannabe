// JS OK
console.log('JS OK');

/*
    Step da seguire:
    1. Assicurarsi che il file JS sia correttamente collegato con console.log('JS OK');
    2. Creare un form in HTML per raccogliere nome, cognome e colore preferito dell'utente;
    3. Collegare il form al file JS per intercettare l'evento submit;
    4. Prelevare i valori inseriti dall'utente nel form;
    5. Generare la password concatenando nome, cognome, colore preferito e '21';
    6. Visualizzare la password generata nella pagina HTML.
*/

// # fase di preparazione 
const suffix = '21';

// Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
const resultelement = document.getElementById('result');
console.log(resultelement);


// Preleviamo i valori 
const fristname = prompt('qual è il tuo nome?', 'Matteo');
const surname = prompt('qual è il tuo congnome?', 'Cota');
const color = prompt('qual è il tuo colore preferito?', 'Rosso');
console.log(fristname, + surname, color);

// Verifichiamo i valori prelevati
const password = fristname + surname + color + suffix;
console.log(password);

// Visualizziamo la password nella pagina HTML
result.innerHTML = `La tua password è: <i>${password}</i>`;
