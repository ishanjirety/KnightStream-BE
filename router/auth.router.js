const express = require('express')
const router = express.Router()

const database = require('../database')

let { videoList, playlists, liked, saved, users } = database

const { User } = require('../models/user.models.js')

const { encryptPassword, decryptPassword, checkSignature } = require('../middlewares')
const { logger, signJwt } = require('../utils')


// @route User Signup
router.post("/signup", encryptPassword, async (req, res) => {
  const request_body = req.body
  try {
    const newUser = new User({
      username: request_body.username,
      password: request_body.password,
      question: "what is your cat's name",
      answer: request_body.answer,
      playlist: [],
      likedvideos: []
    })
    const savedUser = await newUser.save()
    res.json({
      status: 200,
      comment: `${request_body.username} added`,
      data: savedUser,

    })
  } catch (e) {
    res.status(404).json({
      status: 404,
      comment: `${request_body.username} could not be added`,
      error: e.message
    })
  }
})

// @route Password Recovery
router.post("/password/recovery", (req, res) => {
  const request_body = req.body
  if (users.user.find(user => user.username === request_body.username && user.answer === request_body.answer) === undefined) {
    res.json({
      status: 404,
      comment: `${request_body.username} not found`
    })
  }
  else {
    users = { ...users, user: users.user.map(user => user.username === request_body.username ? { ...user, password: request_body.password } : user) }
    res.json({
      status: 204,
      comment: `${request_body.username} updated`
    })
  }
})

// @route Authentication
router.post('/login', async (req, res) => {
  const request_body = req.body
  try {
    const user = await User.findOne({ username: request_body.username })
    const statusDecode = decryptPassword(request_body.password, user.password)
    if (statusDecode) {
      const jwtToken = signJwt(user._id)
      res.status(200).json({
        comment: `username ${request_body.username} found`,
        user: user,
        token: jwtToken
      })
    }
    else {
      res.status(401).json({
        comment: `username ${request_body.username} not found`
      })
    }
  } catch (e) {
    logger(e.message)
  }
})
router.post('/searchuser', checkSignature, async (req, res) => {
  const { userId } = req.body
  try {
    const foundUser = await User.findById(userId)
    console.log(foundUser)
    if (foundUser) {
      res.status(200).json({
        status: 200,
        comment: `found ${foundUser.username}`
      })
    }
    else {
      res.json({
        status: 401,
        comment: `could not find username with token ${request_body.token}`
      })
    }
  } catch (e) {
    res.json({
      status: 500,
      comment: `Could not process the request`
    })
  }
})
router.post('/users/update', (req, res) => {
  const request_body = req.body
  const user = users.user.find(user => user.username === request_body.username)
  if (user !== undefined) {
    users = { ...users, user: users.user.map(user => user.username === request_body.username ? { ...user, password: request_body.password } : user) }
    res.json({
      status: 200,
      comment: `${request_body.username} update succssfully`,
      data: users
    })
  }
  else {
    res.json({
      status: 403,
      comment: `could not find ${request_body.username}`,
    })
  }
})


module.exports = router