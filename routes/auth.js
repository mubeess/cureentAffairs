const express=require('express')

const router=express.Router()

router.post('/',(req,res)=>{
    res.send('getting loggedin  user')
})

router.post('/',(req,res)=>{
    res.send('Loging  user')
})

module.exports=router;