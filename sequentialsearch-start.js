/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri casuali e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*/

const arrayOfNumber = [];

/**
	* Genera un numero compreso tra un numero minimo e un numero massimo
	* (estremi compresi).
	*
	* @param {Number} min Il numero minimo generabile
	* @param {Number} max Il numero massimo generabile
	* @returns {Number} Numero casuale tra min e max (estremi compresi).
	*/
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

/**
	* Popola l'array con dei numeri generati randomicamente.
	*/
function populateArray() {
	for (let i = 0; i < 100; i++) {
		arrayOfNumber.push(generateRandomNumber(1, 100));
	}
}

populateArray();

// INIZIA A SCRIVERE DA QUI
