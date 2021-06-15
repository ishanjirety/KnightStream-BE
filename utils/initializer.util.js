const mongoose = require('mongoose')
const {logger} = require('./logger.util.js')

// DB Connection
const initializeConnection = async () => {
  const URI = `mongodb+srv://ishan:${process.env.DB_SECRET}@applabl-5.vmuqi.mongodb.net/Ecommerce`
  try{
    const Client =await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.clear()
    console.log("<======== CONNECTED TO DB ========>")
  }
 catch(e){
   logger("ERROR : Could not initiate connection",`REASON : ${e.message}`)
 }
}

module.exports = {initializeConnection}