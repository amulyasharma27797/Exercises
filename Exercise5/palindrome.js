function palindrome(){
	var strng = prompt("Enter a string")
	var rev = strng.split('').reverse().join('')

	if(strng == rev){
		alert("Is a palindrome")
	}	

	else{
		alert("Is not a palindrome")
	}
}

palindrome()
