const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const {sequelize} = require('./models')
const config = require('./src/config/config')

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// require('./passport')

// require('./routes')(app)
// app.listen(config.port, () => {
//   console.log(`Server stated on port ${config.port}`)
// }) 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project_expenses'
})

connection.connect()

connection.query('SELECT * from category', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()





// sequelize.sync({force:true}).then(() => {
//   app.listen(config.port)
//   console.log(`Server started on port ${config.port}`)
// })