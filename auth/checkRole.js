/*
    this is a function accepting a role
*/

module.exports = function(role) {
    return function(req, res, next){
        if(req.user){
            if(req.user.roles &&
                Array.isArray(req.user.roles) &&
                req.user.roles.includes(role)
                ){
                    next();
                } else {
                    res.status(403).json({
                        message: "You do not have access"
                    })
                }
        } else {
            res.status(401).json({
                message: "You can not pass"
            })
        }
    }
}