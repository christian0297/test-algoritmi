/**6
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/

	function countChar(s){
		let arrKeyValue = [];

		for(let i=0; i<s.length; i++){
			let numberOccurrences = s.split('').filter(c => c === s.charAt(i)).length;

			if(!arrKeyValue.some(c => c.letter === s.charAt(i))){
				let objKeyValue = {letter: s.charAt(i), occurrences: numberOccurrences,};
				arrKeyValue.push(objKeyValue);
			}
		}

		let outputString="" ;
		arrKeyValue.forEach( element =>{
			outputString += `${element.letter}: ${element.occurrences}, `
		});
		return `{${outputString.slice(0, -2)}}`;

	}

	console.log(countChar("hello"));
	console.log(countChar("abccccccd"));
	console.log(countChar("apple 12311111"));

