class isValid {

	validMail(userMail) {

		// regex for mail
		const re = new RegExp(/(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\.+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/gi);

	
		// compare userMail with regex
		const compareMail = userMail.match(re);


		if (compareMail) {

			console.log('COMPARED OK !!! ');

		}else{

			console.log('COMPARED FAILED !!! ');
		}

		console.log(compareMail);


	}


	validPseudo(userPseudo) {

		if (userPseudo && userPseudo.length > 8) {

			console.log('PSEUDO VALID !');
		};
	}


	validPassword(userPassword) {

		console.log(userPassword);

		const caracteres = ["#", "!", "§","" ];

		for (var i = 0; i < userPassword.length; i++) {

			console.log(userPassword[i]);
			return userPassword[i];


			for (var i = 0; i < caracteres.length; i++) {

				console.log(caracteres[i]);
				return caracteres[i];

				};
			};


			if (userPassword.length > 8 && userPassword[i] === caracteres[i]) {

				console.log('PASSWORD OK !!! ');
			};
		}


	

	validComparePassword(userPassword, verifPassword) {

		if (userPassword === verifPassword) {

			console.log('VERIF PASSWORD OK !!!');
		};
	}


	
}

module.exports = isValid;


