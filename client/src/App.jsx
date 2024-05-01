import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Farmer from './pages/Farmer';
import Distributor from './pages/Distributor';
import Retailer from './pages/Retailer';
import Consumer from './pages/Consumer';

import "./App.css";


const App = () => {
    return (
        <div className="relative sm:-8 bg-[#13131a] min-h-screen flex flex-row">
            <div className="flex-1 max-sm:w-full max-w-full mx-auto sm:pr-5">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/farmer" element={<Farmer />} />
                    <Route path="/distributor" element={<Distributor />} />
                    <Route path="/retailer" element={<Retailer />} />
                    <Route path="/consumer" element={<Consumer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;