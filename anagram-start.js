/**7
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/
	
	function isAnagram(s1, s2){

		if(s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join(''))
			return true;
		else
			return false;
			
	}

	console.log(isAnagram("cinema", "iceman"));
	console.log(isAnagram("manuel", "giraffa"));