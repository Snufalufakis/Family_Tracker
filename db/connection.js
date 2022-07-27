import inquirer from "inquirer";
import mysql from "mysql2";

const connection = mysql.createConnection({
host: 'localhost',
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: 'family_db',
}).promise();
export default connection;