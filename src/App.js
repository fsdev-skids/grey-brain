import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import MainRouter from "./MainRouter"; // 🆕 import routes

function App() {
 

  return (
    <Router>
      {/* Global Theme Toggle */}
      

      {/* Routes */}
      <MainRouter />
    </Router>
  );
}

export default App;
