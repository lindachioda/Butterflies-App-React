
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './components';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import ContactScreen from './screen/ContactScreen';
import SingleButterflyScreen from './screen/SingleButterflyScreen';
import ErrorScreen from './screen/ErrorScreen';

function App() {


  //return le ROUTES!
  return (
    <BrowserRouter basename="/Butterflies-App-React">
      <div className="App">
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/about" element={<AboutScreen />} /> 
        <Route path="/contattaci" element={<ContactScreen />} /> 
        <Route path="/butterfly/:id" element={<SingleButterflyScreen />} /> 
        <Route path="*" element={<ErrorScreen />} /> 
      </Routes>


     <Footer />
  
      </div>
    </BrowserRouter>
  )
}

export default App;
