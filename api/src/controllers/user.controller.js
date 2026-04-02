{/*
 CREATE TABLE users (
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_firstname VARCHAR(100) NOT NULL,
user_lastname VARCHAR(100) NOT NULL,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
join_date TIMESTAMP
);    
*/}

import db from "../config/db.js"

let createUser = (req,res) => {
    let {firstname, lastname, username, password, email} = req.body
    let sql = "INSERT INTO users (user_firstname , user_lastname, username, password, email) VALUES (?,?,?,?,?)"
    let [result] = db.sql(sql, [firstname, lastname, username, password, email])
    res.status(201).json(result.insertedId)
    
}