import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "../nav/Nav";
import day from "../assets/images/day.jpg";
import night from "../assets/images/night.jpg";
import Dock from '../dock/Dock';
import MusicApp from '../music-app/music-app';

function App() {
  const time = new Date().getHours();
  const [background, setBackground] = useState(night)

  //change wallpaper by day time
  useEffect(() => {
    setInterval(() => {
      if(time >= 7 && time <= 19){
        setBackground(day)
      }
      //console.log("time:", time, "\nbackground:", background)
    }, 1000);
    document.body.style.backgroundImage = `url('${background}')` ;
  }, [background]);

  return (
    <div className="App">
      <Nav />
      <div className="windows">
        <MusicApp />
      </div>
      <Dock />
    </div>
  );
}

export default App;
