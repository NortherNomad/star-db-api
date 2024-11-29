import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    StarDB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Starship</a>
                </li>
            </ul>
        </div>
    )
}

export default Header