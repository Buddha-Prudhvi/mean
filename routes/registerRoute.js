const express = require('express')
const router = express.Router()
const Register = require('../models/register');

router.post('/reg/save', async (req,res,next)=>{
     try{
         const al = new Register(req.body);
         const result = await al.save()
         res.status(200).json({'sucess':true,result:result})
     }catch(err){
         console.log(err)
         res.status(404).json({'sucess':false})
     }
})

router.get('/reg/save',async (req,res,next)=>{
    
    try{
    const result = await Register.find({firstname:req.body.firstname});    
    res.status(200).json({'succees':true, result:result})
}catch(err){
    console.log(err)
    res.status(404).json({'success':false})
}
})
router.put('/reg/save',async (req,res,next)=>{
    try{
    const result = await Register.findByIdAndUpdate({_id:req.body._id});
    res.status(200).json({'success':true, result : result})
    }catch(err){
        console.log(err)
        res.status(404).json({'success':false})
    }
});
router.delete('/reg/save',async(req,res,next)=>{
    try{
        const result= await Register.findOneAndRemove({firstname:req.body.firstname});
    }catch(err){
        console.log(err)
        res.status(404).json({'success':false})
    }
})

module.exports = router;

