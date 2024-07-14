const mongoos = require('mongoose')
async function connectDB(urls) {
   return mongoos.connect(urls)
}
module.exports = { connectDB }