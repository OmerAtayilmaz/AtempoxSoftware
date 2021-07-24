const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const app=require('./app');

console.log(process.env.USERNAMES);
console.log(app.get('env'));
//start:prod,start:dev... 

const port=process.env.PORT||4000;


app.listen(port,()=>{
    console.log("App running ");
})
