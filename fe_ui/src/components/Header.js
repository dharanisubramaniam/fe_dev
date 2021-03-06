import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <span>FILMY EFFECTS</span>
      </div>
      <nav className="header__menuContainer">
        <ul className="header__menu">
          <li>
            <a href="/Home.html">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>

          <li>
            <a href="">Downloads</a>
          </li>

          <li>
            <a href="">Courses</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>

      <div className="header__signInContainer">
        <Link className="header__SignIn" href="/login">
          Sign In
        </Link>
        <Link className="header__SignUp" href="/register">
          Sign Up
        </Link>
      </div>
      <div className="header__onHover">Hi Dhars!</div>
    </div>
  );
}

export default Header;
