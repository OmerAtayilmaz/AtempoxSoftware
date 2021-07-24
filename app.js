const express=require('express');
const morgan = require('morgan');

const userRouter=require('./router/userRouter');

const app=express();
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

//middleware
app.use((req,res,next)=>
{
    console.log("Hello from middleware");
    next();
}); 

app.use('/api/v1/users',userRouter);
module.exports = app;