import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "../nav/Nav";
import day from "../assets/images/day.jpg";
import night from "../assets/images/night.jpg";
import Dock from '../dock/Dock';
import Window from '../window/window';

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
    document.body.style.backgroundImage = `url('${background}')`
  }, [background])

  return (
    //fullscreen window
    //rWidth={'100vw'} rHeight={'calc(100vh - 103px)'} rLeft={'25%'} rTop={'0%'}
    <div className="App">
      <Nav />
      <div className="windows">
        <Window className="window" nameApp={'Music'} rWidth={'400px'} rHeight={'600px'} rLeft={'50%'} rTop={'6%'}/>
        <Window className="window" nameApp={'Terminal'} rWidth={'800px'} rHeight={'400px'} rLeft={'40%'} rTop={'7%'}/>
        <Window className="window" nameApp={'Mail'} rWidth={'800px'} rHeight={'600px'} rLeft={'35%'} rTop={'5%'}/>
        <Window className="window" nameApp={'Photos'} rWidth={'1000px'} rHeight={'600px'} rLeft={'30%'} rTop={'6%'}/>
      </div>
      <Dock />
    </div>
  );
}

export default App;
