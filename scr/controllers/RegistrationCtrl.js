class RegistrationCtrl {

	get(req, res) {

		console.log('controller OOKOKKKO');
		res.render('registration.twig');

	}


	post(req, res) {

		console.log('POST OK');
	}
}

module.exports = RegistrationCtrl;