import React, { useState } from 'react';
import "./window.css"
import Namebar from '../name-bar/name-bar';
import Draggable from 'react-draggable';

function Window({maximizeApp, minimizeApp, closeApp, nameApp, rWidth, rHeight, rDisplay}) {
    return (
        <Draggable bounds={'parent'} handle={'.handle'}>
          <div className="Window" style={{width: rWidth, height: rHeight, display: rDisplay}}>
              <Namebar name={nameApp} maximize={maximizeApp} minimize={minimizeApp} close={closeApp}/>
          </div>
        </Draggable>
    );
}

export default Window;