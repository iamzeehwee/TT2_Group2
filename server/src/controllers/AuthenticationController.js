const jwt = require("jsonwebtoken");
const config = require("../config/config");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project_expenses",
});

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
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

  async login(req, res) {
    const username = `${req.body.username}`;
    const password = `${req.body.password}`;
    const sqlSelect = `SELECT * FROM user where username = ? and password = ?`;
    connection.query(sqlSelect, [username, password], (err, result) => {
      // If no error
      if (!err && result.length > 0) {
        console.log("RESULT IS ", result.length > 0);
        res.status(200).json(result);
      } else if (!err && result.length == 0) {
        res.status(403).json({msg: "Invalid log in details"});
      } else {
        res.status(400).json({ msg: "No user found" });
      }
    });
  },
};
