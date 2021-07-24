import './App.css';
import "./css/stil.css";
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <MainContent/>
        <Services/>
        <About/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default App;

/*

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
module.exports = app; */