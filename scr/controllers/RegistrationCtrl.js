const isValid = require('../services/isValid.js');
const yaml = require('yamljs');
const crypto = require('crypto');
const Crypto = require('../services/crypto.js');

const config = yaml.load('./../config/configDb.yml');


class RegistrationCtrl {

	get(req, res) {

		console.log('controller OOKOKKKO');
		res.render('registration.twig');

	}


	post(req, res) {

		let VALID = false;

		// instance of isValid
		const IsValid = new isValid();

		let validLastName = IsValid.validLastName(req.body.lastname);
		let validFirstName = IsValid.validFirstName(req.body.firstname);
		let validMail = IsValid.validMail(req.body.mail);
		let validPseudo = IsValid.validPseudo(req.body.pseudo);
		let validPass = IsValid.validPassword(req.body.pass);
		let validPassCompare = IsValid.validComparePassword(req.body.pass, req.body.passconfirm);
		let validAge = IsValid.validAge(req.body.age);


		console.log('POST OK');

		// all verifications for the registration form 
		if (validMail) {
			VALID = true;

			if (validPseudo) {
				VALID = true;

				if (validFirstName && validLastName && validAge) {



					VALID = true;
					if (validPass && validPassCompare) {
//--------------------------change in DTO DAO--------------------

						const cryptPass = new Crypto(req.body.pass, config.default.crypt.algoCrypt, config.default.crypt.key );


						cryptPass.cipher();

						cryptPass.decipher();





						//CRYPTAGE PASSWORD ! 
						/*const passToCrypt = req.body.pass;

						const algoCrypt = config.default.crypt.algoCrypt;

						const key = config.default.crypt.key;
						

						const cipher = crypto.createCipher(algoCrypt,key);
						const crypted = cipher.update(passToCrypt,'utf8','hex');
						crypted += cipher.final('hex');


						console.log(crypted);

						// DECRYPT PASSWORD
						const decipher = crypto.createDecipher(algoCrypt,key);
						const dec = decipher.update(crypted,'hex','utf8');
						dec += decipher.final('utf8');

						console.log(dec);*/

//--------------------------change in DTO DAO--------------------

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

			res.redirect('/');
			// NEW USER
		}else{

			res.redirect('/registration');
		}
		
		

		
	}
}

module.exports = RegistrationCtrl;