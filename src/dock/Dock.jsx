import * as React from 'react';
import "./Dock.css"
import bin from "../assets/icons/bin.png"
import binFull from "../assets/icons/bin-full.png"
import { useState } from "react";

function Dock() {
    const [ menuBin, setMenuBin ] = useState("hidden")
    const [ name, setName ] = useState("visable")

    let num = 0

    function emptyBin(){
        setMenuBin("visible")
        num++
    }

    function hoverRestore() {
        setMenuBin("hidden")
        num++
    }

    return (  
        <footer className="Dock">
            <div className="dock-container">
                <li className="li-1">
                    <div className="name" style={{visibility: name}}>Finder</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" alt="" />
                </li>
                <li className="li-2">
                    <div className="name" style={{visibility: name}}>Siri</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png" alt="" />
                </li>
                <li className="li-3">
                    <div className="name" style={{visibility: name}}>LaunchPad</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png" alt="" />
                </li> 
                <li className="li-bin" onClick={num / 2 == 0  ? emptyBin : hoverRestore}>
                    <div className="name" style={{visibility: name}}>Bin</div>
                    <img className="ico" src={binFull} alt="bin" />
                    <div className="menu-bin" style={{visibility: menuBin}}>
                        <p>Fill</p>
                        <hr />
                        <p>Empty Bin</p>
                    </div>
                </li>
            </div>
        </footer>
    );
}

export default Dock;