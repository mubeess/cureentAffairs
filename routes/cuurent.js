const express=require('express')

const router=express.Router()

router.post('/',(req,res)=>{
    res.send('current affairs')
})

module.exports=router;