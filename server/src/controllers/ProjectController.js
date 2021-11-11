const jwt = require("jsonwebtoken");
const config = require("../config/config");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project_expenses",
});


module.exports = {
  async getCategory (req, res) {
    const sqlSelectCategory = `SELECT * FROM PROJECT WHERE user_id = ${req.params.id}`;
    connection.query(sqlSelectCategory, (err, result) => {
      // If no error
      if (!err) {
        res.json(result);
      } else {
        res.status(400).json({ msg: "No projects found" });
      }
    });
  }
};