console.log('funzia?')

// Chiede un numero all'utente
let numeroDispari

let lista = []

for (i = 0; i < 10; i++) {

    numeroDispari = parseInt(prompt('Inserisci un numero dispari'))

    while (isNaN(numeroDispari) || (numeroDispari % 2 === 0)) {
        numeroDispari = parseInt(prompt('Inserisci un numero dispari'))
    }
    lista.push(numeroDispari)
}


console.log(lista, numeroDispari)



// Ripetere il ciclo fino al raggiungimento di 10 cifre

// Se il numero è dispari da salvare nell'array altrimenti scartiamo 

// Stampare i valori in cnsole uno alla volta
