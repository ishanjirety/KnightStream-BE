const express = require('express')
const router = express.Router()

const database = require('../database')
let { videoList, playlists, liked, saved, users } = database

const { Video } = require('../models/video.models.js')
const {User} = require('../models/user.models.js')


// @route liked operations
router.get("/:token", async (req, res) => {
  const { token } = req.params
  try{
  const { likedvideos } = await User.findOne({token:token})
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

router.post("/add/:token", async (req, res) => {
  const {_id} = req.body
  const { token } = req.params
  try{
      const { likedvideos } = await User.findOne({token:token})
      if(!likedvideos.find(id => (id).toString() === (_id).toString())){
       await User.findOneAndUpdate({token:token},{likedvideos:[...likedvideos,_id]}) 
      }
      res.json({
      status: 200,
      comment: `Video ID: ${req.body.id} liked`
    })
  }catch(e){
    console.log(e)
    res.status(404).json({
      error:e.message
    })
  }
  
})
router.delete("/remove/:token", async (req, res) => {
  const { token } = req.params
  const { _id } = req.body.video
  try{

    const { likedvideos } = await User.findOne({token:token})
    const newList = likedvideos.filter(id => (id).toString() !== (_id).toString())
    const updateVideo = await User.findOneAndUpdate({token:token},{likedvideos:newList})
    
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