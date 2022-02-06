import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import '../styles/root.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { AuthProvider } from '../contexts/AuthContext';

const App = () => {
  return (
    <Routes>
      <AuthProvider>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </AuthProvider>
    </Routes>
  );
};

export default App;