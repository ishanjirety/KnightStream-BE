const express = require('express')
const router = express.Router()

const { Video } = require('../models/video.models.js')
const { User } = require('../models/user.models.js')

// @route Videolist operatioins
router.get('/',async (req,res)=>{
    const {token} = req.query
    console.log(token)
try{
     const videos = await Video.find({})
      const user = await User.findOne({token:token})
      if(user){
      const { likedvideos } = user
      if(token !== null){
            const video = videos.map(video => likedvideos.find(id => (id).toString() === (video._id).toString()) ? {...video._doc,isLiked:true}:{...video._doc,isLiked:false})
            res.status(200).json({
              status:200,
              videos:video
            })
          }else{
            console.log("In Else")
              res.status(200).json({
              status:200,
              videos:videos
            })
          }
      }else{
        res.status(200).json({
              status:200,
              videos:videos
            })
      }
  
}catch(e){
  console.log(e)
    res.status(404).json({
      error:e.message
    })
}
  
})
router.post('/',async (req,res)=>{
  const {title,description,channelImage,channelName,genere,videoUrl,id} = req.body
  try{
    const result = new Video({
            title:title,
            description:description,
            channelImage:channelImage,
            genere:genere,
            videoUrl:videoUrl,
            id:id
    })
  result.save()
  res.status(200).json({
    comment:"added video"
  })
  }catch(e){
    res.status(400).json({
    error:"could not add"
  })
  }

})
module.exports = router





