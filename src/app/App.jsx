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

  //maximize, minimize and close windows
  const [count, setCount] = useState(0)

  const [width, setWidth] = useState('800px')
  const [height, setHeight] = useState('600px')

  const [displayMail, setDisplayMail] = useState('none')
  const [displayTerminal, setDisplayTerminal] = useState('none')
  const [displayMusic, setDisplayMusic] = useState('none')
  const [displayPhotos, setDisplayPhotos] = useState('none')

  const [mailOpened, setMailOpened] = useState('')
  const [terminalOpened, setTerminalOpened] = useState('')
  const [musicOpened, setMusicOpened] = useState('')
  const [photosOpened, setPhotosOpened] = useState('')

  function maximize() {
    setCount(count+1)
    if(count % 2 == 0){
      setWidth('100vw')
      setHeight('calc(100vh - 103px)')
      return ;
    } 
    setWidth('')
    setHeight('')
  }

  function minimize(num) {
    switch (num) {
      case 0:
        setMailOpened("opened")
        setDisplayMail("none")
        break;
      case 1:
        setTerminalOpened("opened")
        setDisplayTerminal("none")
        break;
      case 2:
        setMusicOpened("opened")
        setDisplayMusic("none")
        break;
      case 3:
        setPhotosOpened("opened")
        setDisplayPhotos("none")
        break;
    
      default:
        break;
    }
  }

  function switchSimplified(num, display) {
    switch (num) {
      case 0:
        setDisplayMail(display)
        break;
      case 1:
        setDisplayTerminal(display)
        break;
      case 2:
        setDisplayMusic(display)
        break;
      case 3:
        setDisplayPhotos(display)
        break;
    
      default:
        break;
    }
  }
  
  function close(num) {
    let ico = document.getElementsByClassName("ico")[num]
    ico.classList.remove("bounce")
    let shortcut = document.getElementsByClassName("shortcut")[num]
    shortcut.classList.remove("opened")
    switchSimplified(num, "none")
  }

  //open an app, verifies if it was opened before
  function open(num){
    let shortcut = document.getElementsByClassName("shortcut")[num]
    let verifyClass = shortcut.classList.contains("opened")
    if(verifyClass){
      switchSimplified(num, "block")
      return;
    }
    setTimeout(() => {
      switchSimplified(num, "block")
    }, 1400);
  }

  return (
    <div className="App">
      <Nav />
      <div className="windows">
        <Window className="window" maximizeApp={maximize} minimizeApp={()=>minimize(0)} closeApp={()=>close(0)} nameApp={'Mail'} rWidth={width} rHeight={height} rDisplay={displayMail}/>
        <Window className="window" maximizeApp={maximize} minimizeApp={()=>minimize(1)} closeApp={()=>close(1)} nameApp={'Terminal'} rWidth={width} rHeight={height} rDisplay={displayTerminal}/>
        <Window className="window" maximizeApp={maximize} minimizeApp={()=>minimize(2)} closeApp={()=>close(2)} nameApp={'Music'} rWidth={width} rHeight={height} rDisplay={displayMusic}/>
        <Window className="window" maximizeApp={maximize} minimizeApp={()=>minimize(3)} closeApp={()=>close(3)} nameApp={'Photos'} rWidth={width} rHeight={height} rDisplay={displayPhotos}/>
      </div>
      <Dock openMail={()=>open(0)} mailOpened={mailOpened} openTerminal={()=>open(1)} terminalOpened={terminalOpened} openMusic={()=>open(2)} musicOpened={musicOpened} openPhotos={()=>open(3)} photosOpened={photosOpened}/>
    </div>
  );
}

export default App;
