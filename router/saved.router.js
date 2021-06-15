const express = require('express')
const router = express.Router()


const database = require('../database')
// let {videoList,playlists,liked,saved,users} = database

const { User } = require('../models/user.models.js')
const {Video} = require('../models/video.models.js')

const {checkSignature} = require('../middlewares')

router.use(checkSignature)


// @route saved operations
router.get("/",async (req,res)=>{
  const {userId} = req.body
  const videos = await Video.find({})
  const { saved } = await User.findById(userId)

  const newSaved = saved.map(video =>{ 
    let {title,description,channelImage,videoUrl,id} = videos.find((item) => item._id.toString() === video._id.toString())
  return {title,description,channelImage,videoUrl,id,_id:video._id,notes:video.notes}
    }
  )
    res.json({
        status:200,
        saved:{
           count:newSaved.length,
           savedvideos:newSaved,
},
    })
}) 
router.post("/add",async (req,res)=>{
  const {_id,notes,userId} = req.body
  const user = await User.findById(userId)
  let saved = user.saved !== undefined ? user.saved : []
    if(saved.find(video=> video._id === _id) !== undefined){
      saved = saved.map(video => video._id.toString() === _id ?   {...video,notes:notes}: video)
    }
    else{
      saved = [...saved,{_id,notes}]
    }
    await User.findOneAndUpdate({_id:userId},{saved:saved})
    res.json({
        status:200,
        comment:`Video ID:${_id} saved`
    })
})
router.post("/remove",async (req,res)=>{
    const { _id,userId } = req.body

    const {saved} = await User.findById(userId)
    const newSaved = saved.filter(video=> video._id.toString() !== _id)

    await User.findOneAndUpdate({_id:userId},{saved:newSaved})

    res.json({
        status:200,
    })
})

module.exports = router