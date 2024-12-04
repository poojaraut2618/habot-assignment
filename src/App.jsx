import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import FindSuppliers from "./findSuppliers/FindSuppliers";
import ServiceTag from './serviceTag/ServiceTag';
import ServiceOne from './serviceTag/ServiceOne';
import ServiceTwo from './serviceTag/SeviceTwo';
import ServiceThree from './serviceTag/ServiceThree';
import About from './about/About';
import FAQ from './faq/FAQ';
import DataPrivacy from './dataPrivacy/DataPrivacy';
import Terms from './terms/Terms';
import Accessibility from './accessibility/Accessibility';
import FindBuyer from './findBuyer/FindBuyer';
import Feedback from './feedback/Feedback';

function App() {

  return (
    <>
    <Router basename="/habot-assignment">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path="/find-suppliers" element={<FindSuppliers />} />
        <Route path="/service" element={<ServiceTag />} />
        <Route path="/service/service1" element={<ServiceOne/>} /> {/* Dynamic route for services */}
        <Route path="/service/service2" element={<ServiceTwo/>} /> {/* Dynamic route for services */}
        <Route path="/service/service3" element={<ServiceThree/>} /> {/* Dynamic route for services */}
        <Route path="/about" element={<About/>} /> {/* Dynamic route for services */}
        <Route path="/faq" element={<FAQ/>} /> {/* Dynamic route for services */}
        <Route path="/data-privacy" element={<DataPrivacy/>} /> {/* Dynamic route for services */}
        <Route path="/terms" element={<Terms/>} /> {/* Dynamic route for services */}
        <Route path="/accessibility" element={<Accessibility/>} /> {/* Dynamic route for services */}
        <Route path="/find-buyers" element={<FindBuyer/>} /> {/* Dynamic route for services */}
        <Route path="/feedback" element={<Feedback/>} /> {/* Dynamic route for services */}
{/* Add more routes as needed */}

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App;