const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  id:String,
  title:String,
  description:String,
  channelName:String,
  channelImage:String,
  genre:String,
  videoUrl:String,
})

const Video = mongoose.model("Product",VideoSchema)


module.exports = {Video}