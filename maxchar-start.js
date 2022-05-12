/**4
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/

	function maxChar(s){
		let max = 0;
		let maxC ='';

		for(let i=0; i<s.length; i++){
			let numberOccurrences = s.split('').filter(c => c === s.charAt(i)).length;
			if(max < numberOccurrences){
				max = numberOccurrences;
				maxC = s.charAt(i);
			}
		}
		return maxC;
	}

	console.log(maxChar("abccccccd"));
	console.log(maxChar("apple 12311111"));