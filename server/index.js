const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const AuthenticationController = require("./src/controllers/AuthenticationController.js");

// Initialize an variable called app
const app = express();
app.use(cors());

// Body parser to parse request data (raw and form submission)
// Note that this must be written at the top of index.js, before the routing code
// Else it will not work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./src/routes/routes')(app)

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "project_expenses",
});

app.post(
  "/login",
  AuthenticationController.login
);

// SELECT ALL CATEGORY  (TODO: FIX ROUTE)
app.get("/catergory", (req, res) => {
  const sqlSelectCategory = `SELECT * FROM CATEGORY`;
  connection.query(sqlSelectCategory, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No category found" });
    }
  });
});

// == SELECT ALL PROJECTS CREATED BY A USER  (TESTED VIA POSTMAN) ==
app.get("/project/:id", (req, res) => {
  const sqlSelectProjectsByUser = `SELECT * FROM PROJECT WHERE user_id = ${req.params.id}`;
  connection.query(sqlSelectProjectsByUser, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No projects found" });
    }
  });
});

// == ADD EXPENSE TO A PROJECT  (TODO: FIX ROUTE) ==
app.post("/expense/add", (req, res) => {
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
});

// == RETURN A LIST OF EXPENSE FOR A PROJECT (TODO: FIX ROUTE) ==
app.get("/project/:id", (req, res) => {
  const sqlSelectProjectsByUser = `SELECT * FROM PROJECT WHERE user_id = ${req.params.id}`;
  connection.query(sqlSelectProjectsByUser, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No projects found" });
    }
  });
});


// Such config info should be stored in another config file.
// process.env.PORT is used because when we deploy, the server may not be using 5000
const PORT = process.env.PORT || 5000;

// listen() is to listen to a port
// Second parameter is a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
