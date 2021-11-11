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
 async addExpenses (req, res) {
    const projectId = `${req.body.projectId}`;
    const categoryId = `${req.body.categoryId}`;
    const name = `${req.body.name}`;
    const description = `${req.body.description}`;
    const amount = `${req.body.amount}`;
    const createdBy = `${req.body.createdBy}`;
    const updatedBy = `${req.body.updatedBy}`;
    const sqlInsertExpense = `INSERT INTO EXPENSE(project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES(?, ?, ?, ?, ?, NOW(), ?, NOW(), ?)`;
    connection.query(sqlInsertExpense, [projectId, categoryId, name, description, amount, createdBy, updatedBy], (err, result) => {
      // If no error
      if (!err) {
        res.json(result);
      } else {
        res.status(400).json({ msg: `Error when inserting expense to ${project_id}` });
      }
    });
  }
};
