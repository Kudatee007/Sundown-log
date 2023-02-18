import ContactUs from "./Components/ContactUs";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component from "./Components/Components";
import Footer from "./Footer";
import About from "./Components/AboutUs";
import Services from "./Components/Services";
import Booking from "./Components/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
