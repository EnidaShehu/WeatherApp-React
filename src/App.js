import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import WeatherDisplay from './components/WeatherDisplay';
import './fontAwesome';


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/weather" element={<WeatherDisplay />} />
      </Routes>
    </BrowserRouter>
 );
}

export default App;