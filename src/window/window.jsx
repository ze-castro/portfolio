import React, { useState } from 'react';
import "./window.css"
import Namebar from '../name-bar/name-bar';
import Draggable from 'react-draggable';

function Window({nameApp, rWidth, rHeight, rLeft, rTop}) {
    return (
        <Draggable bounds={'parent'} handle={'.handle'}>
          <div className="Window" style={{width: rWidth, height: rHeight, left: rLeft, top: rTop}}>
              <Namebar name={nameApp}/>
          </div>
        </Draggable>
    );
}

export default Window;