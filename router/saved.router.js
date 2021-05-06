const express = require('express')
const router = express.Router()


const database = require('../database')
// let {videoList,playlists,liked,saved,users} = database

const { User } = require('../models/user.models.js')
const {Video} = require('../models/video.models.js')

// @route saved operations
router.get("/:token",async (req,res)=>{
  const {token} = req.params
  const videos = await Video.find({})
  const { saved } = await User.findOne({token:token})

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
router.post("/add/:token",async (req,res)=>{
  const { token } = req.params
  const {_id,notes} = req.body
  const user = await User.findOne({token:token})
  let saved = user.saved !== undefined ? user.saved : []
    if(saved.find(video=> video._id === _id) !== undefined){
      console.log("logged")
      saved = saved.map(video => video._id.toString() === _id ?   {...video,notes:notes}: video)
    }
    else{
      saved = [...saved,{_id,notes}]
    }
  const Saved = await User.findOneAndUpdate({token:token},{saved:saved})

    res.json({
        status:200,
        comment:`Video ID:${_id} saved`
    })
})
router.post("/remove/:token",async (req,res)=>{
    const { token } = req.params
    const { _id } = req.body

    const {saved} = await User.findOne({token:token})
    console.log(saved)

    const newSaved = saved.filter(video=> video._id.toString() !== _id)

    await User.findOneAndUpdate({token:token},{saved:newSaved})

    res.json({
        status:200,
    })
})

module.exports = router