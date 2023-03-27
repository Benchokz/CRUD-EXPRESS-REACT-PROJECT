const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crudappdatabase',
});

app.get('/', (req, res)=> {


    const sqlInsert = 
    "INSERT INTO movie-reviews (movieName, movieReview) VALUES ('John Wick', 'Good movie');"
    db.query(sqlInsert, (err, result)=> {
        res.send("Hello, Ebuka");
  })

})

app.listen(5000, () => {
    console.log('running on port 5000')
});