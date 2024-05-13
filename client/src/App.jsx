import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Farmer from './pages/Farmer';
import Distributor from './pages/Distributor';
import Retailer from './pages/Retailer';
import Consumer from './pages/Consumer';
import Test from './components/Test';
import bg from './assets/bg.jpg'
import TransactionHistory from './components/Transactions';
import Footer from './components/Footer';

import "./App.css";


const App = () => {
    return (
        <div className="relative sm:-8 min-h-screen flex flex-row bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex-1 max-sm:w-full max-w-full mx-auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/farmer" element={<Farmer />} />
                    <Route path="/distributor" element={<Distributor />} />
                    <Route path="/retailer" element={<Retailer />} />
                    <Route path="/consumer" element={<Consumer />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            <TransactionHistory />
            </div>
        </div>
    );
}

export default App;