import mysql from "mysql2/promise";


const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "intern_work_1"
});

console.log("MySQL connected successfully");

export default db;