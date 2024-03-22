const jwt = require('jsonwebtoken')

const verifytoken = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json("Yor are not authenticated")
    }
    jwt.verify(token, process.env.SECRET, async(err, data) => {
        if(err){
            return res.status(403).json("Token is not valid")
        }
        req.userId = data.id
        next()
    })
}

module.exports = verifytoken