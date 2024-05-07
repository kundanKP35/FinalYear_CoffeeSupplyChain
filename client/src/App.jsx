import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Farmer from './pages/Farmer';
import Distributor from './pages/Distributor';
import Retailer from './pages/Retailer';
import Consumer from './pages/Consumer';
import Test from './components/Test';
import bg from './assets/bg.jpg'

import "./App.css";


const App = () => {
    return (
        <div className="relative sm:-8 min-h-screen flex flex-row bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex-1 max-sm:w-full max-w-full mx-auto sm:pr-5">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/farmer" element={<Farmer />} />
                    <Route path="/distributor" element={<Distributor />} />
                    <Route path="/retailer" element={<Retailer />} />
                    <Route path="/consumer" element={<Consumer />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;