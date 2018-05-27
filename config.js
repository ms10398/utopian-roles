require('dotenv').config()

const config = {
  mongo: process.env.MONGO_HOST
}

module.exports = config;
