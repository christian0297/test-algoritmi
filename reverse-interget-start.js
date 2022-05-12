/**2
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/


	function reverseInt(n){
		let numberToString = n.toString().split('').reverse().join('');
		if(n>=0)
			return parseInt(numberToString);
		else
			return -parseInt(numberToString);
	}
	

	console.log(reverseInt(59)); 
	console.log(reverseInt(30)); 
	console.log(reverseInt(-6005)); 
	console.log(reverseInt(-900)); 