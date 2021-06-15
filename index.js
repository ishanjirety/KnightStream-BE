const express = require('express')

const cors = require('cors')
const app = express()


// @desc for body parsing
app.use(express.json())

// @desc to prevent Cross-Origin Resource Sharing error
app.use(cors())

const mongoose = require('mongoose')

// Router
const VideoList = require('./router/videolist.router.js')
const Playlist = require('./router/playlist.router.js')
const LikedVideos = require('./router/liked.router.js')
const SavedVideos = require('./router/saved.router.js')
const Auth = require('./router/auth.router.js')

// Utils
const {initializeConnection} = require("./utils")


// Banner
const {Banner} = require('./Banner.js')

// Routes
app.use("/api/videolist",VideoList)
app.use("/api/playlist",Playlist)
app.use("/api/liked",LikedVideos)
app.use("/api/saved",SavedVideos)
app.use("/api",Auth)
app.use("/",Banner)


app.listen(4444,initializeConnection)




// function checkStatuses(){
//     videoList.map((items)=>{
//         const FoundItem = liked.likedvideos.find((video)=>items.id===video.id)
//         videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isLiked:true} : item) : videoList
//         })
//         videoList.map((items)=>{
//             const FoundItem = playlists.playlist.find((video)=>items.id===video.id)
//             videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isInplaylist:true} : item) : videoList
//             })

//             videoList.map((items)=>{
//                 const FoundItem = saved.savedvideos.find((video)=>items.id===video.id)
//                 videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isSaved:true} : item) : videoList
//                 })
// }


