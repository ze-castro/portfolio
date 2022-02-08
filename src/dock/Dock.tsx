import * as React from 'react';
import "./Dock.css"

function Dock() {
    return (  
        <footer className="Dock">
            <div className="dock-container">
                <li className="li-1">
                    <div className="name">Finder</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" alt="" />
                </li>
                <li className="li-2">
                    <div className="name">Siri</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png" alt="" />
                </li>
                <li className="li-3">
                    <div className="name">LaunchPad</div>
                    <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png" alt="" />
                </li>
                <li className="li-bin">
                    <div className="name">Bin</div>
                    <img className="ico ico-bin" src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png" alt="" />
                </li>
            </div>
        </footer>
    );
}

export default Dock;