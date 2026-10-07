/*
  ESERCIZIO RIASSUNTIVO 2 - Accesso

  Dati ruolo ("admin", "editor", "viewer") e isLogged (boolean):
  - admin e editor possono accedere (true)
  - viewer può accedere solo se isLogged è true
  - se il ruolo non è riconosciuto, accesso negato (false)

  Restituisci true se l'accesso è consentito.
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es12(ruolo, isLogged) {
  // TODO: scrivi qui la tua soluzione
  return ruolo === "admin" || ruolo === "editor" || ruolo === "viewer" && isLogged === true ? true : false;
  
  /*
  if (ruolo === "admin") {
    return true;
  }
  if (ruolo === "editor") {
    return true;
  }
  if (ruolo === "viewer" && isLogged === true) {
    return true;
  }
  return false
  */
}

// --- NON MODIFICARE SOTTO ---
export { es12 };
