const express = require('express')
const router = express.Router()
const { logger } = require('../utils')

const { Video } = require('../models/video.models.js')
const { User } = require('../models/user.models.js')
const { checkSignature } = require('../middlewares')

// @route Videolist operatioins
router.get('/', checkSignature, async (req, res) => {
  const { userId } = req.body
  try {
    const videos = await Video.find({})
    const user = await User.findById(userId)
    if (user) {
      const { likedvideos } = user
      if (userId !== null) {
        const video = videos.map(video => likedvideos.find(id => (id).toString() === (video._id).toString()) ? { ...video._doc, isLiked: true } : { ...video._doc, isLiked: false })
        res.status(200).json({
          status: 200,
          videos: video
        })
      } else {
        res.status(200).json({
          status: 200,
          videos: videos
        })
      }
    } else {
      res.status(200).json({
        status: 200,
        videos: videos
      })
    }

  } catch (e) {
    logger(e)
    res.status(404).json({
      error: e.message
    })
  }

})
router.post('/', async (req, res) => {
  const { title, description, channelImage, channelName, genere, videoUrl, id } = req.body
  try {
    const result = new Video({
      title: title,
      description: description,
      channelImage: channelImage,
      genere: genere,
      videoUrl: videoUrl,
      id: id
    })
    result.save()
    res.status(200).json({
      comment: "added video"
    })
  } catch (e) {
    logger(e)
    res.status(400).json({
      error: "could not add"
    })
  }

})
module.exports = router





