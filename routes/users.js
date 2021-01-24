const express=require('express')

const router=express.Router()

router.post('/',(req,res)=>{
    res.send('adding a user')
})

module.exports=router;