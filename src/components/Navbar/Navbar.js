import React from "react";
import { Link } from "react-router-dom";

import { NavbarComponent } from './styles'

export const Navbar = () => (
  <NavbarComponent>
    <div className="logo__container">
      <Link to="/" className="logo">CocktailZ</Link>
    </div>
    <div className="links">
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/cocktails" className="navbar__link">Cocktails</Link>
      <Link to="/favorites" className="navbar__link">Favorites</Link>
      <Link to="/contactus" className="navbar__link">Contact Us</Link>
    </div>
  </NavbarComponent>
);