/**8
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/

	function generateRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	//creazione di un array di numeri ordinato
	function generateArray(){
		const arrN = [];
		const dimensionArray = generateRandomNumber(1,100);

		for(let i=0; i<dimensionArray; i++){
			let random = generateRandomNumber(10,100);
			if(!arrN.includes(random))
			arrN.push(random);
		}
		arrN.sort();
		console.log(arrN);
		return arrN;
	}
	
	function binarySearch(findNumber, arrNumber){
		let mid = arrNumber[Math.floor(arrNumber.length / 2)];
		console.log("array ridotto : "+ arrNumber);
		if(mid === findNumber)
			return true;
		else if(mid < findNumber){ //vado a destra
			if(arrNumber.length ==1)//caso particolare, da inserire o cicla all'infinito.
				return false;
			return binarySearch(findNumber, arrNumber.slice(arrNumber.indexOf(mid), arrNumber.length));
		}
			
		else if(mid > findNumber) //vado a sinistra
			return binarySearch(findNumber, arrNumber.slice(0, arrNumber.indexOf(mid)));

		return false;
	}
	
	//valori ricercati che non rientrano tra 10 e 100 restituiranno sempre false
	console.log(binarySearch(18 , generateArray()));