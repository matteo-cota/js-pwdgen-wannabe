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

// Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
const form = document.getElementById('userForm');
const result = document.getElementById('result');

// Aggiungiamo un event listener al form per intercettare il submit
form.addEventListener('submit', function (event) {
    // Preveniamo il comportamento di default del form (refresh della pagina)
    event.preventDefault();

    // Preleviamo i valori inseriti dall'utente
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const color = document.getElementById('color').value.trim();

    // Verifichiamo i valori prelevati
    console.log('Nome:', name);
    console.log('Cognome:', surname);
    console.log('Colore Preferito:', color);

    // Generiamo la password concatenando i valori e '21'
    const password = name + surname + color + '21';

    // Verifichiamo la password generata
    console.log('Password Generata:', password);

    // Visualizziamo la password nella pagina HTML
    result.textContent = password;
});