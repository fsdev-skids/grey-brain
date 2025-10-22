import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import MainRouter from "./MainRouter"; // 🆕 import routes
import Navbar from './components/Navbar';

function App() {
 

  return (
    <Router>
      <Navbar />
      {/* Global Theme Toggle */}
      

      {/* Routes */}
      <MainRouter />
    </Router>
  );
}

export default App;
