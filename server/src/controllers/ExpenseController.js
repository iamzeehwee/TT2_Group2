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
          res.status(200).json({ msg: `Inserted expense to project id: ${projectId}` });
      } else {
        res.status(400).json({ msg: `Error when inserting expense to project id: ${projectId}` });
      }
    });
  },

  //To be updated
  async updateExpenses (req, res) {
    console.log("THE REQ DATA IS", req.body);
    const expenseId = `${req.params.id}`;
    const projectId = `${req.body.projectId}`;
    const categoryId = `${req.body.categoryId}`;
    const name = `${req.body.name}`;
    const description = `${req.body.description}`;
    const amount = `${req.body.amount}`;
    const createdBy = `${req.body.createdBy}`;
    const updatedBy = `${req.body.updatedBy}`;
    const sqlInsertExpense = `
    UPDATE EXPENSE set category_id = ?, name = ?, description = ?, amount = ?, updated_at = NOW(), created_by = ?, updated_by = ?,  project_id = ? WHERE id = ?`;
    connection.query(sqlInsertExpense, [categoryId, name, description, amount, createdBy, updatedBy, projectId, expenseId], (err, result) => {
      // If no error
      if (!err) {
        res.json(result);
      } else {
        console.log("ERROR R R R R R", err)
        res.status(400).json({ msg: `Error when updating expense ` });
      }
    });
  },

  async getExpenseByProjectId (req, res) {

    const projectId = `${req.params.id}`;
    const sqlSelectExpenseByProject = `SELECT * FROM EXPENSE E LEFT JOIN PROJECT P ON E.PROJECT_ID = P.ID WHERE P.ID = ${projectId}`;
    connection.query(sqlSelectExpenseByProject, [projectId], (err, result) => {

      if (!err) {
        if (result.length > 0) {
          res.json(result);
        }
        else {
          res.status(400).json({ msg: `No expense created for project id: ${projectId}` });
        }
      } else {
        res.status(400).json({ msg: `Error when retrieving expense for ${projectId}` });
      }
    });
  },

  async deleteExpense (req, res) {
    const expenseId = `${req.params.id}`;
    const sqlDelete = `DELETE FROM EXPENSE WHERE id = ${expenseId}`;
    connection.query(sqlDelete, (err, result) => {
      // If no error
      if (!err) {
        res.status(200).json({ msg: `Deleted Expense successfully` });
      } else {
        res.status(400).json({ msg: `Error when deleting expense` });
      }
    });
  },
};
