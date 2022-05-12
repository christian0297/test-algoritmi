/**1
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/
	

	function reverseString(s){
		let reverseS="";
		for(let i=s.length; i>=0; i--){
			reverseS += s.charAt(i);
		}
		return reverseS;
	}

	function anotherReverseString(s){
		return s.split('').reverse().join('');
	}


	console.log(reverseString("ciao")); 
	console.log(anotherReverseString("ciao")); 