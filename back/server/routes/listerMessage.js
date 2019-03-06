const router=require('express').Router();
const message = require('../models/message');
const verifyToken = require('../routes/jwt').verifyToken;


router.get('/listerMes/:iduser1/:iduser2',verifyToken, async (req,res)=>{
 var results = await message.find().or([{ sender : req.params.iduser1,receiver: req.params.iduser2},{sender : req.params.iduser2,receiver: req.params.iduser1 }]).sort({date :-1})
 .populate({path:'sender',select:['name','lastname']})
 .populate({path:'receiver',select:['name','lastname']}).exec();
 res.send(results);
});
module.exports = router;