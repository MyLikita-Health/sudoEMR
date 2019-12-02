//you need to import the all necessary setup
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
const port = process.env.PORT || 4000;


// creating express app
var app= express()

// create connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});


// Middleware setup
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// routes starts here
app.get('/', (req, res) => {
  res.json({ greetings: 'Hello' });
});

// route for fetching all users
app.get('/fhddb/all', (req, res) => {
  connection.query('SELECT * FROM `fhddb`', function(err, results, fields) {
    res.json({ users: results });
  });
});


// create a user
app.post('/fhddb/new', (req, res) => {
  const { hcfNo,hcfName,address,phone,contactPerson,email } = req.body;
  console.log(req.body);

  connection.query(
    `INSERT INTO fhddb(hcfNo,hcfName,address,phone,contactPerson,email) VALUES ("${hcfNo}","${hcfName}","${address}","${phone}","${contactPerson}","${email})`,
    (err, results) => {
      res.json({ results });

    }
  );
});


app.listen(4000,function(){
  console.log('server started on port 4000..')
})
