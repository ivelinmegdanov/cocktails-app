import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar__link">Home</Link>
    <Link to="/favorites" className="navbar__link">Favorites</Link>
  </nav>
);