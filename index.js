const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

//@desc for body parsing
app.use(express.json())

// @desc to prevent Cross-Origin Resource Sharing error
app.use(cors())

//@desc Importing Databases
const database = require('./database')
let {videoList,playlists,liked,saved,users} = database

// DB Connection
const URI = "mongodb+srv://ishan:Ishan%408878005371@applabl-5.vmuqi.mongodb.net/Ecommerce"
console.log(URI)

const Client =mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected")).catch(e=>console.log("Could not connect",e))

// Router
const VideoList = require('./router/videolist.router.js')
const Playlist = require('./router/playlist.router.js')
const LikedVideos = require('./router/liked.router.js')
const SavedVideos = require('./router/saved.router.js')
const Auth = require('./router/auth.router.js')

// Routes
app.use("/api/videolist",VideoList)
app.use("/api/playlist",Playlist)
app.use("/api/liked",LikedVideos)
app.use("/api/saved",SavedVideos)
app.use("/api",Auth)




app.listen(4444,()=>{
    console.log("listening on port 4444")
})




function checkStatuses(){
    videoList.map((items)=>{
        const FoundItem = liked.likedvideos.find((video)=>items.id===video.id)
        videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isLiked:true} : item) : videoList
        })
        videoList.map((items)=>{
            const FoundItem = playlists.playlist.find((video)=>items.id===video.id)
            videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isInplaylist:true} : item) : videoList
            })

            videoList.map((items)=>{
                const FoundItem = saved.savedvideos.find((video)=>items.id===video.id)
                videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isSaved:true} : item) : videoList
                })
}


