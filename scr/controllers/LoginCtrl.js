class LoginCtrl {
	
	get(req, res) {

		console.log('login get');
		res.render('login.twig');

	}


	post(req, res) {
		console.log('login post');

	}
}


module.exports = LoginCtrl;