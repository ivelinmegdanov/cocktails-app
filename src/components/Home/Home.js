import React from "react";
import { Link } from "react-router-dom";

import { HomeContainer, OnlineBarSection } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <OnlineBarSection>
        <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1517521303/180131-wondrich-bad-cocktail-tease_wghhv8" alt="cocktail" />
        <h2>Welcome to our Online Bar!</h2>
        <p>Create your own cocktails at home with our simple step-by-step guide. Choose your base spirit, mixers, sweeteners, and get creative with different combinations of flavors and ingredients until you find something you love. Don't forget to add a garnish for a professional touch!</p>
        <Link to="/cocktails" className="button">Get Inspired in Our Cocktail Recipes</Link>
        <img src="https://media.discordapp.net/attachments/727243562282123355/1088808077790294046/barshelves.jpg?width=1201&height=675" alt="bar shelves" />
        <p>Experience the taste of high-quality cocktails in the comfort of your own home. Our selection of premium cocktails and their recipes are crafted with the finest ingredients to ensure exceptional flavor and quality. Browse our cocktails page to discover your favorites and add them to your personal collection for easy access whenever you want.</p>
        <Link to="/favorites" className="button">Go to Favorites</Link>
        <img src="https://images.squarespace-cdn.com/content/v1/5dcdc45a240feb5a09c34bcf/1575573298915-384XF1A8K0GXVY74WQTA/peopledrinks-banner-texture.jpg?format=2500w" alt="nazdravitsa" />
        <p>Feeling overwhelmed and unsure where to start? Our team of experts is here to help. Contact us today and we'll get in touch within 24 hours to discuss how we can assist you. </p>
        <Link to="/contactus" className="button">Message us now</Link>
      </OnlineBarSection>
    </HomeContainer>
  );
};
