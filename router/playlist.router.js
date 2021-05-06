const express = require('express')
const router = express.Router()


const database = require('../database')
let {videoList,playlists,liked,saved,users} = database

const { Video } = require('../models/video.models.js')
const { User } = require('../models/user.models.js')

// @route playlists operations
router.get("/:token",async (req,res)=>{
    const { token } = req.params
    try{
    const { playlist } = await User.findOne({token:token})
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
      res.status(500).json({
        error:e.message
      })
    }
})
router.post("/add/:token",async (req,res)=>{
    playlists = {...playlists,count:playlists.count+1,playlist:[...playlists.playlist,req.body]}
    const { token }  = req.params
    const playlistReq = req.body
    try{
      const { playlist } = await User.findOne({token:token})
      const newPlaylist = [...playlist,playlistReq]
      const updateUser = await User.findOneAndUpdate({token:token},{playlist:newPlaylist})
    res.status(200).json({
        status:200,
        comment:`${req.body.name} added to playlists`
    })
    }catch(e){
      res.status(404).json({
        error:e.message
      })
    }
})

router.delete("/remove/:token",async (req,res)=>{
    const { token } = req.params
    const { name } = req.body
  try{
    const { playlist } = await User.findOne({token:token})
    const newPlaylist = playlist.filter(list => list.name !== name)
    const updateUser = await User.findOneAndUpdate({token:token},{playlist:newPlaylist})
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
    const {name,token,video:{_id}} = req.body
    const { playlist } = await User.findOne({token:token})
    const newPlaylist = playlist.map(list=>list.name === name ? {...list,videos:[...list.videos,_id]} : list)
    await User.findOneAndUpdate({token:token},{playlist:newPlaylist})
    res.json({
        status:200,
        comment : `${_id} added to ${name}`,
        data: playlists
    })
})
router.post("/item/remove",async (req,res)=>{
   const {name,token,video:{_id}} = req.body
    const { playlist } = await User.findOne({token:token})
    const newPlaylist = playlist.map(list=>list.name === name ? {...list,videos:list.videos.filter(item=>item !== _id)} : list)
    await User.findOneAndUpdate({token:token},{playlist:newPlaylist})
    res.json({
        status:200,
        comment : `${_id} removed from ${name}`,
        data: playlists
    })
})

module.exports = router
