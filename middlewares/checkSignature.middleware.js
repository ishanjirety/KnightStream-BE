const jwt = require('jsonwebtoken');
const {logger} = require('../utils')

const checkSignature = (req,res,next) => {
  const {authorization} = req.headers
  const {baseUrl} = req
  
  // @desc Exception for publc route
  if(baseUrl==="/api/videolist" && !authorization) return next()

  // @desc Checking every route
  try{
    const {id} = jwt.verify(authorization,process.env.SECERET)
    req.body = {...req.body,userId:id}
    next()
  }catch(e){
    logger(`ERROR:${e.message}`)
    res.status(401).json({
        success:false,
        error:e.message
    })
  }
}
module.exports = {checkSignature}