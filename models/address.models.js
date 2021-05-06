const { Schema } = require('mongoose')


const URI = "mongodb+srv://ishan:Ishan%408878005371@applabl-5.vmuqi.mongodb.net/test"

const Client =mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected")).catch(e=>console.log("Could not connect"))


const ProductSchema = new Schema({
  
})