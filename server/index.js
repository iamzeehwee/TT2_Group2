const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const AuthenticationController = require("./src/controllers/AuthenticationController.js");
const CORS_OPTIONS = {
  credentials: true,
  origin: "http://localhost:3000"
};

// Initialize an variable called app
const app = express();
app.use(cors(CORS_OPTIONS));

// Body parser to parse request data (raw and form submission)
// Note that this must be written at the top of index.js, before the routing code
// Else it will not work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./src/routes/routes')(app)

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project_expenses",
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
