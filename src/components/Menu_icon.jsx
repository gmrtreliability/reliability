import React from "react";
import "./Menu_icon.css";
import "./Navbar.css";
const MenuIcon = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
      className={`menu-icon ${isMenuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default MenuIcon;
