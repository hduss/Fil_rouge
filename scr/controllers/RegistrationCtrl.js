const validMail = require('../services/isValidMail.js')

class RegistrationCtrl {

	get(req, res) {

		console.log('controller OOKOKKKO');
		res.render('registration.twig');

	}


	post(req, res) {

		

		console.log('POST OK');
		
		console.log(req.body.pseudo);
		console.log(req.body.pass);
		

		
	}
}

module.exports = RegistrationCtrl;