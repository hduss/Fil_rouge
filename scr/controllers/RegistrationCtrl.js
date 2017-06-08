const isValid = require('../services/isValid.js')

class RegistrationCtrl {

	get(req, res) {

		console.log('controller OOKOKKKO');
		res.render('registration.twig');

	}


	post(req, res) {

		let VALID = false;

		// instance of isValid
		const IsValid = new isValid();

		let validLastName = IsValidLastName(req.body.lastname);
		let validFirstName = IsValid.validFirstName(req.body.firstname);
		let validMail = IsValid.validMail(req.body.mail);
		let validPseudo = IsValid.validPseudo(req.body.pseudo);
		let validPass = IsValid.validPassword(req.body.pass);
		let validPassCompare = IsValid.validComparePassword(req.body.pass, req.body.passconfirm);
		let validAge = IsValidAge(req.body.age);

		console.log('POST OK');

		// all verifications for the registration form 
		if (validMail) {
			VALID = true;

			if (validPseudo) {
				VALID = true;

				if (validPass && validPassCompare) {

					VALID = true;
					if (validFirstName && validLastName && validAge) {

						VALID = true;
					}else{

						VALID = false;
					}
				}else{

					VALID = false;
				}
			}else{

				VALID = false;
			};

		}else{

			VALID = false;
		}

		// if everything is valid / true
		if (VALID) {

			console.log('EVERYTHINGGUCCI !!');
			// send data in Database
			// envoi en BDD
		}else{

			res.redirect('/registration');
		}
		
		

		
	}
}

module.exports = RegistrationCtrl;