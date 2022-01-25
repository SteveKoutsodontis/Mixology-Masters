import React from "react";
import logo from "../images/pj_logo1.png";

export default function Footer() {
    return (
        <div className="footer xl p-5">
            <p>Concocted by Nat, Linda, Sulaimon, Joe and Steve.</p>
            <a href="/Home">
          <img src={logo} style={{width:50, marginTop: -7}} />
          </a>
        </div>
    )
}