/*
  ESERCIZIO 13 - filter()

  .filter() crea un nuovo array con solo gli elementi che
  soddisfano una condizione.

  Sintassi:  array.filter(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es13_1(arr) {
  // 1. Restituisci solo i numeri maggiori di 10
  // TODO: scrivi qui la tua soluzione
  return arr.filter(x => x >10)
}

function es13_2(arr) {
  // 2. Restituisci solo le stringhe con lunghezza >= 5
  // TODO: scrivi qui la tua soluzione
  return arr.filter(x => x.length >=5)
}

function es13_3(arr) {
  // 3. Restituisci solo i numeri pari
  // TODO: scrivi qui la tua soluzione
  return arr.filter(x => x % 2 === 0)
}

// --- NON MODIFICARE SOTTO ---
export { es13_1, es13_2, es13_3 };
