import Banner from './components/Banner';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Form from './components/Form';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Services/>
      <Gallery/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
