import Banner from './components/Banner';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Form from './components/Form';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/home" index element={<Banner/>} />  
          <Route path="/about" element={<About/>} />  
          <Route path="/service" element={<Services/>} />  
          <Route path="/project" element={<Gallery/>} />  
          <Route path="/contact" element={<Form/>} /> 
        </Routes>
        <Banner/>
        <About/>
        <Services/>
        <Gallery/>
        <Form/>
        <Footer/>
      </BrowserRouter> */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Gallery />} />
          <Route path="/contact" element={<Form />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
