import React, { useState } from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="header-container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>LOGO</h1>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <a classname="nav-item" href="#">
                  Qualifications
                </a>
              </li>
              <li>
                <a classname="nav-item" href="#">
                  Organizations
                </a>
              </li>
              <li>
                <a classname="nav-item" href="#">
                  Research
                </a>
              </li>
              <li>
                <a classname="nav-item" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a classname="nav-item" href="#">
                  About
                </a>
              </li>
              <li>
                <a classname="nav-item" href="#">
                  {" "}
                  <IoIosSearch
                    style={{ fontWeight: "bolder", fontSize: "25px" }}
                  />
                </a>
              </li>
              <li>
                <button className="enrol">Enrolment</button>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu color="#000" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
