import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import LandingPageBackground from './LandingPageBackground';

const ColorChangingH1 = () => {
  const [isPink, setIsPink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPink((prevIsPink) => !prevIsPink);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 className={isPink ? 'pink' : 'blue'}>
      Welcome to My First Weather App!
    </h1>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className='container'>
      <LandingPageBackground />
      <div className='content'>
        <ColorChangingH1 />
        <p>Please log in to display the weather.</p>
        <button  className= 'submit' onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
