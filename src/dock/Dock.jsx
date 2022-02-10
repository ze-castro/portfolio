import * as React from 'react';
import "./Dock.css"
import bin from "../assets/icons/bin.png"
import binFull from "../assets/icons/bin-full.png"
import mail from "../assets/icons/mail.png"
import music from "../assets/icons/music.png"
import photos from "../assets/icons/photos.png"
import terminal from "../assets/icons/terminal.png"
  
import { useState } from "react";

function Dock() {
    const [ menuBin, setMenuBin ] = useState("hidden")
    const [ name, setName ] = useState("")
    const [ num, setNum ] = useState(0)
    const [ src, setSrc] = useState(binFull)
    const [ open, setOpen] = useState("")
    const [ bounce, setBounce] = useState("")

    function emptyBin(){
        setMenuBin("visible")
        setName("hidden")
        setNum(num+1)
    }

    function hoverRestore() {
        setMenuBin("hidden")
        setName("")
        setNum(num+1)
    }

    function fill(){
        setSrc(binFull)
    }

    function empty(){
        setSrc(bin)
    }

    function clicked(){
        let li1 = document.getElementsByClassName("li-1")[0]
        let ico = document.getElementsByClassName("ico")[0]
        li1.classList.add("opened")
        ico.classList.add("bounce") 
    }
        
    return (  
        <footer className="Dock">
            <div className="dock-container">
                <li className="li-1" onClick={clicked}>
                    <div className="name">Mail</div>
                    <img className="ico" src={mail} alt="" />
                </li>
                <li className="li-2" onClick={clicked}>
                    <div className="name">Terminal</div>
                    <img className="ico" src={terminal} alt="" />
                </li>
                <li className="li-3" onClick={clicked}>
                    <div className="name">Music</div>
                    <img className="ico" src={music} alt="" />
                </li>
                <li className="li-4" onClick={clicked}>
                    <div className="name">Photos</div>
                    <img className="ico" src={photos} alt="" />
                </li>
                <li className="li-bin" onClick={num % 2 === 0 ? emptyBin : hoverRestore}>
                    <div className="name" style={{visibility: name}}>Bin</div>
                    <img className="ico" src={src} alt="bin" />
                    <div className="menu-bin" style={{visibility: menuBin}}>
                        <p onClick={fill}>Fill</p>
                        <hr />
                        <p onClick={empty}>Empty Bin</p>
                    </div>
                </li>
            </div>
        </footer>
    );
}

export default Dock;