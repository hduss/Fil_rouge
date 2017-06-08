

class isValid {

	validMail(userMail) {

		// regex for mail
		const re = new RegExp(/(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\.+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/gi);

	
		// compare userMail with regex
		const compareMail = userMail.match(re);

		if (compareMail) {

			console.log('COMPARED OK !!! ');
			return true;

		}else{

			console.log('COMPARED FAILED !!! ');
			return false;
		}

		console.log(compareMail);

		// verifier si le mail est deja present dans la base de données 


	}


	validPseudo(userPseudo) {

		if (userPseudo && userPseudo.length > 8) {

			console.log('PSEUDO VALID !');
			return true;

		}else{

			return false;
		};


		// verifier si le pseudo est deja existant
	}


	validPassword(userPassword) {

		
		// string of special caracteres for valid password
		const caracteres = "$£!§:/;.,?";


		for (var i = 0; i < caracteres.length; i++) {

			// indexOf return -1 if false and return integer if true :)
			let verif = userPassword.indexOf(caracteres[i]);
			
			console.log(caracteres[i]);

			if (verif > 0  && verif.length > 8 ) {

				console.log('PASSWORD VALID');
				return true;

			}else{

				console.log('PASSWORD INVALID !!! ')
				return false;
			};


		}
}


	

	validComparePassword(userPassword, verifPassword) {

		if (userPassword && verifPassword && userPassword === verifPassword) {

			console.log('VERIF PASSWORD OK !!!');
			return true;
		};
	}


	validFirstName(firstName) {

		if (firstName && typeof firstName ==="string") {

			console.log("FIRSTNAME VALID !!");
			return true;
		}else{

			console.log('FIRSTNAME INVALID');
			return false;
		};
	}

	validLastName(lastName) {

		if (lastName && typeof lastName ==="string") {
			
			console.log("LASTNAME VALID !!");
			return true;
		}else{

			console.log('LASTNAME INVALID');
			return false;
		};
	}

	validAge(age) {

		if (age >= 18) {
			console.log('AGE VALID');
			return true;
		}else{

			return false;
		};
	}
}


module.exports = isValid;


