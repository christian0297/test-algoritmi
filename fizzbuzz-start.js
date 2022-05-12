/**5
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/

	function generateRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function fizzbuzz(){
		let nRandom = generateRandomNumber(1,100);
		let word = "";

		if(nRandom % 3 === 0)
			word="Fizz"
		if(nRandom % 5 === 0)
			word="Buzz"
		if(nRandom % 3 === 0 && nRandom % 5 === 0)
			word="FizzBuzz"

		return nRandom + " : " + word;
	}

	for(let i=0; i<100; i++){
			console.log(fizzbuzz());
	}