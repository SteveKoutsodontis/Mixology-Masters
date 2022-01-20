import React from "react";
import '../css/index.css';
import PjLogo from './header/pj_logo1.png'

export default function Header() {
    return (
        <div>
            <img id='pjLogo' src={PjLogo} alt="pjLogo" />
        </div>
    )
}