console.log('funzia?')

// Chiede un numero all'utente
let numeroDispari

numeroDispari = parseInt(prompt('Inserisci un numero dispari'))

while (isNaN(numeroDispari) || (numeroDispari % 2 === 0)) {
    numeroDispari = parseInt(prompt('Inserisci un numero dispari'))
}

console.log(numeroDispari)

// Ripetere il ciclo fino al raggiungimento di 10 cifre

// Se il numero è dispari da salvare nell'array altrimenti scartiamo 

// Stampare i valori in cnsole uno alla volta
