const express = require('express')
const router = express.Router()
const {logger} = require('../utils') 
const {checkSignature} = require('../middlewares')

const database = require('../database')
let { videoList, playlists, liked, saved, users } = database

const { Video } = require('../models/video.models.js')
const {User} = require('../models/user.models.js')


router.use(checkSignature)

// @route liked operations
router.get("/",async (req, res) => {
  const { userId } = req.body
  try{
  const { likedvideos } = await User.findById(userId)
  const videos = await Video.find({})
  let liked = []
  likedvideos.forEach((id)=>videos.find((video)=>(video._id).toString() === (id).toString()) ? liked = [...liked,videos.find((video)=>(video._id).toString() === (id).toString())] : null)

    res.json({
      status: 200,
      liked: {
    count:liked.length,
    likedvideos:liked,
}
    })
  }catch(e){
    res.status(404).json({
      error:e.message
    })
  }
  
})

router.post("/add", async (req, res) => {
  const {_id,userId} = req.body
  try{
      const { likedvideos } = await User.findById(userId)
      if(!likedvideos.find(id => (id).toString() === (_id).toString())){
       await User.findOneAndUpdate({_id:userId},{likedvideos:[...likedvideos,_id]}) 
      }
      res.json({
      status: 200,
      comment: `Video ID: ${req.body._id} liked`
    })
  }catch(e){
    logger(e)
    res.status(404).json({
      error:e.message
    })
  }
})

// Have to start from here
router.delete("/remove", async (req, res) => {
  const { _id } = req.body.video
  const {userId} = req.body
  try{
    const { likedvideos } = await User.findById(userId)
    const newList = likedvideos.filter(id => (id).toString() !== (_id).toString())
    const updateVideo = await User.findOneAndUpdate({_id:userId},{likedvideos:newList})
    
    res.json({
      status: 302,
      comment: `Video ID: ${req.body.id} removed from liked`,
      data:updateVideo
    })
  }catch(e){
    res.status(404).json({
    error:e.message
  })
  }
})

module.exports = router