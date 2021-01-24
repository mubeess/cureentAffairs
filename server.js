const express=require('express')

const app=express();
const PORT=process.env.PORT||5000;

app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))
app.use('/api/current',require('./routes/cuurent'))

app.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`)
})