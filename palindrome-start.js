/**3
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/

	function reverseString(s){
		return s.split('').reverse().join('');
	}

	function isPalindrome(s){
		let sLower = s.toLowerCase();

		if(sLower === reverseString(sLower))
			return true;
		else
			return false;
	}


	console.log(isPalindrome("Anna"));
	console.log(isPalindrome("ManUel"));