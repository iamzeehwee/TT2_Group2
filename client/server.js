const express = require('express')
const path = require('path')
const app = express()
var port = process.env.PORT || 80

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port, function () {
  console.log('NODE_ENV: ' + process.env.NODE_ENV)
  console.log('Server is running on port: ' + port)
})
