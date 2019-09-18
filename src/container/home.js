import React from 'react';
import '../App.css';
import banner from '../assets/images/download.jpeg';

function Home() {
  return (
    <div>
        Home page works
        <img src={banner} alt=""/>
        <img src={require('../assets/images/download.jpeg')} />
    </div>
  );
}

export default Home;