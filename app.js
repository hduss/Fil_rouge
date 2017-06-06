
const express = require('express');
const app = express();

const path = require('path');
const twig = require ('twig');

const bodyParser = require('body-parser');
const mysql = require('mysql');



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'coursBlog'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }


  const blog = connection.query('SELECT slug FROM blog_category', function (error, results, fields) {
  if (error) throw error;
  // connected! 
	});

console.log(blog);
 
  console.log('Db OK!');
});





// use bodyparser middleware pour recuperer les données saisies dans les formulaires html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/',  (req, res) => {
  res.render('layout.twig', { message: 'hello world'} )
})


app.get('/registration', (req, res) => {
	res.render('registration.twig');

})


app.post('/registration', (req, res) => {
	

})



app.get('/login', (req, res) => {
	res.render('login.twig');
})


app.post('/login', (req, res) => {

})

// middleware for 404 error
app.use(function(req, res){
  res.status(404);
  res.render('404');
})


//
const port = process.env.PORT || 3000; 
 
app.listen(port, () => { console.log("connected ! ")});