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
    const userId = `${req.body.userId}`;
    const name = `${req.body.name}`;
    const budget = `${req.body.budget}`;
    const description = `${req.body.description}`;
  

    const sqlSelect = `INSERT INTO project(user_id, name, budget, description) VALUES (?, ?, ?, ?)`;
    connection.query(
      sqlSelect,
      [userId, name, budget, description],
      (err, result) => {
        // If no error
        if (!err) {
          res.status(200).json({ projectID: result.insertId });
        } else {
          console.log("error is ssadfds", err)
          res.status(400).json({ msg: "Error adding project" });
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