const router=require('express').Router();
const message = require('../models/message');
const verifyToken = require('../routes/jwt').verifyToken;
router.post('/ajoutMes/:idSender/:idReceiver',verifyToken, async (req,res)=>{

var  newMsg = new message();
newMsg.sender= req.params.idSender;
newMsg.receiver=req.params.idReceiver;
newMsg.corps=req.body.corps;

newMsg.save(function(err, savedUser){
    if (err) {
        console.log(err);
        return res.status(500).send();
    }
    else{

    return res.status(200).send({message :'you have successufuly add a new message'});
} });     
})
module.exports = router ;