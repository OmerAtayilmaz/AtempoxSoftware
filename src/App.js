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
