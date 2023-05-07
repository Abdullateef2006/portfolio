import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/About';
import {  Routes, Route } from "react-router-dom";
import Form from './components/form';
import Home from './components/home';
import Services from './components/services';



// import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Content />} />
        <Route path='about' element={<About />} />
      </Routes> */}

      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Form/>}/>


        </Routes>
      {/* </BrowserRouter> */}
   
   
      <Footer/>

    </div>
  );
}

export default App;
