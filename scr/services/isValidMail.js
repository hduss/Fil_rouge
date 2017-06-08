class isValid {

	validMail(userMail) {

		// regex for mail
		const re = new RegExp(/(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\.+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/gi);

	
		// compare userMail with regex
		const compareMail = userMail.match(re);

		
		if (compareMail) {

			console.log('COMPARED ok §§§');

		}else{

			console.log('COMPARED FAILED !!')
		}

		console.log(compareMail);


	}

	
}

module.exports = isValid;


