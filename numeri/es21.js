/*
  ESERCIZIO RIASSUNTIVO 7 - Conversione secondi

  Dato un numero di secondi passato come parametro:
  - converti in ore, minuti, secondi (HH:MM:SS)
  - esempio: 3661 → 1 ora, 1 minuto, 1 secondo

  Restituisci: { ore: 1, minuti: 1, secondi: 1 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es21(secondi) {
  const n = 3600
  var minuti = Math.floor(secondi - n * ora / 60)
  var ore = Math.floor(secondi / n)
  secondi = Math.floor(secondi / secondi)
  // TODO: scrivi qui la tua soluzione
  return { ore, minuti, secondi }
}

// --- NON MODIFICARE SOTTO ---
export { es21 };
