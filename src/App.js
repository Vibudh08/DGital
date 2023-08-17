import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import ServicesDetail from './Pages/ServicesDetail';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route>
          <Route exact path="/serviceDetail" element={<ServicesDetail/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
