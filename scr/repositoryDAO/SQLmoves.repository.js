//Generic DAO 

const connection = require('mysql');

class SQLmoves {

	// En param, il faut passe le nom de la classe provenant du require('****')
	constructor(className) {
		this._className = className;
	}

	

	findAll(table) {

		return new Promise((resolve, reject) => {

			connection.query(`
				SELECT * 
				FROM ${table}`, (error, results, fields) => {

				const listDTO = results.map(result =>  {
					// return new userDTO(result.firstName, result.lastName, result.pseudo, result.password, result.age, result.description)
					return new this._className(result.firstName, result.lastName, result.pseudo, result.password, result.age, result.description);
				});

				console.log(`Results : ${results}`);

				resolve(listDTO);
			});
		});
	}

	findOne(name, table) {

		return new Promise((resolve, reject) => {

			connection.query(`
				SELECT * 
				FROM ${table} 
				WHERE name = ${name}`, (error, results, fields) => {

				const listDTO = result.map( result => {

					return new this._className(result)
				})
			});
			
		})

	}

	findDecipher() {

	}

	insert(toInsert, title, table) {

		connection.query(`
			INSERT INTO ${table} 
			SET ${title} = ${toInsert}`, (error, results, fields) => {

		});

	}



	insertCipher(toInsert, table) {

		const cryptPass = new Crypto(toInsert, config.default.crypt.algoCrypt, config.default.crypt.key );


		cryptPass.cipher();


		connection.query(`INSERT INTO ${table} SET `);
	}


	updateOne(table, toUpdate, condition, egal1, egal2 ) {

		connection.query(`
			UPDATE ${table} 
			SET ${toUpdate} = ? 
			WHERE ${condition} = ?`, 
			[egal1, egal2], (error, results, fields) => {

				if (error) throw error;

				console.log(`UPDATED table ${table}, ${egal1} become ${egal2} at ${toUpdate}`)
			});
	}

	updateAll() {

	}




	delete(toDelete, table, condition) {

		connection.query(`
			DELETE FROM ${table} 
			WHERE ${toDelete} = ${condition}`, (error, result, fields) => {

			if (error) throw error;
			console.log('deleted' + result.affectedRows + 'rows');

		})


	}


}

// const sqlMoves = new SQLmoves(userDTO);

// sqlMoves.findAll().then(
	// results => console.log(results);
//	results => {
//		results.forEach(result => console.log(result.firstName))
//	}
//)

module.exports = SQLmoves;