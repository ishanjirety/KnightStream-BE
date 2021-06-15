const Banner = (req,res,next) =>{
  res.send(
    `<small><strong><u>Welcome To Knight stream API</u></strong></small>`
  )
}
module.exports = {Banner}