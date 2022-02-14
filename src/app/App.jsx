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
  const [count0, setCount0] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const [widthMail, setWidthMail] = useState('800px')
  const [heightMail, setHeightMail] = useState('600px')
  const [widthTerminal, setWidthTerminal] = useState('800px')
  const [heightTerminal, setHeightTerminal] = useState('600px')
  const [widthMusic, setWidthMusic] = useState('800px')
  const [heightMusic, setHeightMusic] = useState('600px')
  const [widthPhotos, setWidthPhotos] = useState('800px')
  const [heightPhotos, setHeightPhotos] = useState('600px')

  const [displayMail, setDisplayMail] = useState('none')
  const [displayTerminal, setDisplayTerminal] = useState('none')
  const [displayMusic, setDisplayMusic] = useState('none')
  const [displayPhotos, setDisplayPhotos] = useState('none')

  const [mailOpened, setMailOpened] = useState('')
  const [terminalOpened, setTerminalOpened] = useState('')
  const [musicOpened, setMusicOpened] = useState('')
  const [photosOpened, setPhotosOpened] = useState('')

  function maximize(num) {
    let width = '100vw'
    let height = 'calc(100vh - 104px)'
    switch (num) {
      case 0:
        setCount0(count0+1)
        if(count0 % 2 === 0){
          setWidthMail(width)
          setHeightMail(height)
          return ;
        }
        setWidthMail('')
        setHeightMail('')
        break;
      case 1:
        setCount1(count1+1)
        if(count1 % 2 === 0){
          setWidthTerminal(width)
          setHeightTerminal(height)
          return ;
        }
        setWidthTerminal('')
        setHeightTerminal('')
        break;
      case 2:
        setCount2(count2+1)
        if(count2 % 2 === 0){
          setWidthMusic(width)
          setHeightMusic(height)
          return ;
        }
        setWidthMusic('')
        setHeightMusic('')
        break;
      case 3:
        setCount3(count3+1)
        if(count3 % 2 === 0){
          setWidthPhotos(width)
          setHeightPhotos(height)
          return ;
        }
        setWidthPhotos('')
        setHeightPhotos('')
        break;
      default:
        break;
    }
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
        <Window className="window" maximizeApp={()=>maximize(0)} minimizeApp={()=>minimize(0)} closeApp={()=>close(0)} nameApp={'Mail'} rWidth={widthMail} rHeight={heightMail} rDisplay={displayMail}/>
        <Window className="window" maximizeApp={()=>maximize(1)} minimizeApp={()=>minimize(1)} closeApp={()=>close(1)} nameApp={'Terminal'} rWidth={widthTerminal} rHeight={heightTerminal} rDisplay={displayTerminal}/>
        <Window className="window" maximizeApp={()=>maximize(2)} minimizeApp={()=>minimize(2)} closeApp={()=>close(2)} nameApp={'Music'} rWidth={widthMusic} rHeight={heightMusic} rDisplay={displayMusic}/>
        <Window className="window" maximizeApp={()=>maximize(3)} minimizeApp={()=>minimize(3)} closeApp={()=>close(3)} nameApp={'Photos'} rWidth={widthPhotos} rHeight={heightPhotos} rDisplay={displayPhotos}/>
      </div>
      <Dock openMail={()=>open(0)} mailOpened={mailOpened} openTerminal={()=>open(1)} terminalOpened={terminalOpened} openMusic={()=>open(2)} musicOpened={musicOpened} openPhotos={()=>open(3)} photosOpened={photosOpened}/>
    </div>
  );
}

export default App;
