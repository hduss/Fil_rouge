const isValid = require('../services/isValid.js')

class RegistrationCtrl {

	get(req, res) {

		console.log('controller OOKOKKKO');
		res.render('registration.twig');

	}


	post(req, res) {

		const IsValid = new isValid();

		IsValid.validPseudo(req.body.pseudo);
		IsValid.validPassword(req.body.pass);
		IsValid.validComparePassword(req.body.pass, req.body.passconfirm);

		console.log('POST OK');
		
		

		
	}
}

module.exports = RegistrationCtrl;