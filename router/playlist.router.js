const express = require('express')
const router = express.Router()

const { Video } = require('../models/video.models.js')
const { User } = require('../models/user.models.js')

const {logger} =require('../utils') 
const {checkSignature} = require('../middlewares')

router.use(checkSignature)

// @route playlists operations
router.get("/",async (req,res)=>{
    const {userId} = req.body
    try{
    const { playlist } = await User.findById(userId)
    const videoList = await Video.find({})    
    const newPlaylist = playlist.map(list=>{
        return {...list,videos:list.videos.map(id => videoList.find(video=>video._id.toString() === id ) )}
    })
       res.json({
        status:200,
        playlists:{
      count:playlist.length,
      playlist:newPlaylist,
      }
    })
    }catch(e){
      logger(`ERROR:${e.message}`)
      res.status(500).json({
        error:e.message
      })
    }
})
router.post("/add",async (req,res)=>{
    const {userId,name,count,videos,date} = req.body
    const playlistReq = {name,count,videos,date}
    try{
        const { playlist } = await User.findById(userId)
        const newPlaylist = [...playlist,playlistReq]
        await User.findOneAndUpdate({_id:userId},{playlist:newPlaylist})
            res.status(200).json({
                status:200,
                comment:`${req.body.name} added to playlists`
            })
    }catch(e){
      logger(`ERROR:${e.message}`)
      res.status(404).json({
        error:e.message
      })
    }
})

router.delete("/remove",async (req,res)=>{
    const { name,userId } = req.body
  try{
    const { playlist } = await User.findById(userId)
    const newPlaylist = playlist.filter(list => list.name !== name)
    const updateUser = await User.findOneAndUpdate({_id:userId},{playlist:newPlaylist})
    res.status(200).json({
        status:200,
        comment:`${name} deleted from playlist`,
        data:updateUser.playlist
    })
  }catch(e){
    res.status(404).json({
        error:e.message
    })
  }
})

router.post("/item/add",async (req,res)=>{
    const {name,userId,video:{_id}} = req.body
    try{
        const { playlist } = await User.findById(userId)
    const newPlaylist = playlist.map(list=>list.name === name ? {...list,videos:[...list.videos,_id]} : list)
    await User.findOneAndUpdate({_id:userId},{playlist:newPlaylist})
    res.json({
        status:200,
        comment : `${_id} added to ${name}`,
        data: newPlaylist
    })
    }catch(e){
      logger(`ERROR:${e.message}`)
        res.status(404).json({
        error:e.message
    })
    }
  
})

router.post("/item/remove",async (req,res)=>{
   const {name,userId,video:{_id}} = req.body
   try{
    const { playlist } = await User.findById(userId)
    const newPlaylist = playlist.map(list=>list.name === name ? {...list,videos:list.videos.filter(item=>item !== _id)} : list)
    await User.findOneAndUpdate({_id:userId},{playlist:newPlaylist})
    res.json({
        status:200,
        comment : `${_id} removed from ${name}`,
        data: newPlaylist
    })
   }catch(e){
        logger(`ERROR:${e.message}`)
        res.status(404).json({
        error:e.message
    })
   }
   
})

module.exports = router
