import React from 'react';
import "./name-bar.css"

function Namebar({name, maximize, minimize, close}) {

    return (
        <div className="name-bar handle">
            <div className="btns">
                <div className="btn red" onClick={close}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L8 16M8.00003 8L16 16" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></div>
                <div className="btn yellow" onClick={minimize}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L17 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                <div className="btn green" onClick={maximize}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V17M7 12L17 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
            </div>
            <div className="app-name">{name}</div>
        </div>
    );
}

export default Namebar;