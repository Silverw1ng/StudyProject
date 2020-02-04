import React from "react";
import {Link} from "react-router-dom";
import "./Styling.css";

export default function MainBar() {
    return(
      <div>
        <nav className="header">
          <Link  to="/">
            <span className="menu-link">
              Главная
            </span>
          </Link>
          <Link to="/sights">
            <span className="menu-link">
              Достопримечательности
            </span>
          </Link>
          <Link to="/about">
            <span className="menu-link">
              О сайте
            </span>
          </Link>
        </nav>
      </div>
    );

}
