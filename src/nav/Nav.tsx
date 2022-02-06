import React from 'react';
import './Nav.css';
import Clock from 'react-live-clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className="Nav">
            <ul>
                <li><FontAwesomeIcon icon={faApple} /></li>
                <li><b>Portfolio</b></li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li><FontAwesomeIcon icon={faDesktop} /></li>
                <li><FontAwesomeIcon icon={faTabletAlt} /></li>
                <li><FontAwesomeIcon icon={faMobileAlt} /></li>
                <li><Clock format={'ddd. DD/MM hh:mm:ss'} ticking={true} /></li>
            </ul>
        </nav>
    );
}
export default Nav;