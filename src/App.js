import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Logo from "./assets/image/inter_logo.png";

function App() {
  return (
    <div className="App">
        <div className='Logo'>
          <img src={Logo} height="108px" alt="Inter logo" />
        </div>         
        <div className='Background'>
          <Navigation />
          <Header />
        </div>
        <Main />
        <Aside />
        <Footer />
    </div>
  );
}

export default App;