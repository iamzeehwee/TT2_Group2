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
  async addProject(req, res) {
    const username = `${req.body.username}`;
    const password = `${req.body.password}`;
    const name = `${req.body.name}`;
    const appointment = `${req.body.appointment}`;

    const sqlSelect = `INSERT INTO user(username, password, name, appointment) VALUES (?, ?, ?, ?)`;
    connection.query(
      sqlSelect,
      [username, password, name, appointment],
      (err, result) => {
        // If no error
        if (!err) {
          res.status(200).json({ userID: result.insertId });
        } else {
          res.status(400).json({ msg: "Error adding user" });
        }
      }
    );
  },

  async getProjectBasedOnUser (req, res) {
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