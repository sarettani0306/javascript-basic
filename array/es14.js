/*
  ESERCIZIO 14 - find() e findIndex()

  .find() restituisce il primo elemento che soddisfa una condizione.
  .findIndex() restituisce l'indice del primo elemento che soddisfa
  una condizione.

  Sintassi:  array.find(funzione)
  Sintassi:  array.findIndex(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es14_1(arr) {
  // 1. Trova il primo numero maggiore di 10
  // TODO: scrivi qui la tua soluzione
  return arr.find( x => x > 10)
}

function es14_2(arr) {
  // 2. Trova l'indice della prima stringa che inizia con "A"
  // TODO: scrivi qui la tua soluzione
  return arr.findIndex( x => x.startsWith("A"))
}

function es14_3(arr) {
  // 3. Se l'array contiene il numero 5, restituisci "trovato", altrimenti "non trovato"
  // Suggerimento: usa find() o includes()
  // TODO: scrivi qui la tua soluzione
  return arr.includes(5) ? "trovato" : "non trovato"
}

// --- NON MODIFICARE SOTTO ---
export { es14_1, es14_2, es14_3 };
