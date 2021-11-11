const path = require('path')
module.exports = {
  port: process.env.PORT || 5000,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}