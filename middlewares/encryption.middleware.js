const bcrypt = require('bcryptjs')

const encryptPassword = (req, res, next)=>{
    const {password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    req.body = {...req.body,password: hash}
    next()
}

const decryptPassword = (userPassword,DBPassword) =>{
  return bcrypt.compareSync(userPassword, DBPassword);
}
module.exports = {encryptPassword,decryptPassword}
