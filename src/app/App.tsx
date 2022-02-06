import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "../nav/Nav";
import day from "../assets/images/day.jpg";
import night from "../assets/images/night.jpg";

function App() {
  const time : number = new Date().getHours();
  const [background, setBackground] = useState(night)

  setInterval(() => {
    if(time >= 7 && time <= 19){
      setBackground(day)
    } else {
      setBackground(night)
    }
    console.log("time:", time, "\nbackground:", background)
  }, 1000);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${background}')` ;
  });

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
