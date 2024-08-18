import React from 'react'
import Dashboard from './Component/Dashboard';
import Client from './Component/Client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Header from './Component/Header';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Main from './Main';
import './App.css'
import ScrollToTop from './Component/ScrollToTop';
import Login from './Component/Login';


const App = () => {
  return (
    <div>
   
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Main/>
      <Routes>
          <Route>
          <Route index element={<Login />} />
          <Route path="Main" element={<Login />}></Route>
          
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="client" element={<Client />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  )
}

export default App
