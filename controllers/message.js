const Message = require('../models/message');

//middlewares
exports.putSaveMessage = (req,res,next) => {
    const messageString = req.body.message;
    const lat =  req.body.lat;
    const lon =  req.body.lon;

    const message = new Message({
        lat: lat,
        lon: lon,
        message: messageString
    });

    message.save().
    then(result => {
        res.json({
            messsage: 'Message added'
        })
    })
    .catch(err => {
        //Handle errors here
    })
    
}