const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const port=4000;


const app=express();



// routes starts here
app.get('/', (req, res) => {
  res.json({ greetings: 'Hello' });
});



app.use(cors());
// Middleware setup
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
 // create connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

// route for fetching all users
app.get('/fhddb/all', (req, res) => {
  connection.query('SELECT * FROM `aishadb`', function(err, results, fields) {
    res.json({ users: results });
  });
});
// create a user
app.post('/aishadb/new', (req, res) => {
  const { hcfNo,hcfName,address,phone,contactperson,email,long,lat} = req.body;
  console.log(req.body);
  connection.query(
    `INSERT INTO db(hcfNo,hcfName,address,phone,contactperson,email,long,lat) VALUES ("${hcfNo}","${hcfName}","${address}","${phone}","${contactperson}","${email}","${long}","${lat}")`,
    (err, results) => {
      if(err) throw err;
      res.json({ results });

    }
  );
});
// route for fetching all users
app.get('/aishadb/all', (req, res) => {
  connection.query('SELECT * FROM `aishadb`', function(err, results, fields) {
    res.json({ users: results });
  });
});

app.listen(port,()=>console.log("app is runing on port "))


