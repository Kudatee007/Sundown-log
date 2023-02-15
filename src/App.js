// import logo from './logo.svg';
// import './App.css';
import ContactUs from './Components/ContactUs';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Component from './Components/Components'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route path="/" element={<Component />} />
     <Route path="/contactUs" element={<ContactUs />} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
