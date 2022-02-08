import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "../nav/Nav";
import day from "../assets/images/day.jpg";
import night from "../assets/images/night.jpg";
import Dock from '../dock/Dock';

function App() {
  const time : number = new Date().getHours();
  const [background, setBackground] = useState(night)

  setInterval(() => {
    if(time >= 7 && time <= 19){
      setBackground(day)
    }
    //console.log("time:", time, "\nbackground:", background)
  }, 1000);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${background}')` ;
  });

  return (
    <div className="App">
      <Nav />
      <Dock />
    </div>
  );
}

export default App;
