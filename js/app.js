// console.log('funzia?')

let numeroDispari

let lista = []

// Ripetere il ciclo fino al raggiungimento di 10 cifre
for (i = 0; i < 10; i++) {

    // Chiede un numero all'utente
    numeroDispari = parseInt(prompt('Inserisci un numero dispari'))

    // Se il numero è dispari da salvare nell'array altrimenti scartare 
    while (isNaN(numeroDispari) || (numeroDispari % 2 === 0)) {
        numeroDispari = parseInt(prompt('Inserisci un numero dispari'))
    }
    // Stampare i valori in console uno alla volta
    console.log(numeroDispari)

    // Aggiungere i valori all'array
    lista.push(numeroDispari)
}

console.log(lista, numeroDispari)