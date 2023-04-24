import React from "react";

import {
  FooterContainer,
  FooterInnerContainer,
  FooterSection,
  FooterTitle,
  FooterLinks,
  FooterLink,
  FooterContact,
  FooterContactLink,
  FooterRights,
} from "./styles";

export const Footer = () => (
  <FooterContainer>
    <FooterInnerContainer>
      <FooterSection>
        <FooterTitle>CocktailZ</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink to="/">Home</FooterLink>
          </li>
          <li>
            <FooterLink to="/cocktails">Cocktails</FooterLink>
          </li>
          <li>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </li>
          <li>
            <FooterLink to="/favorites">Favorites</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterContact>
          <p>088 933 7266</p>
          <FooterContactLink href="mailto:ivelin@devlabs.bg">
            ivelin@devlabs.bg
          </FooterContactLink>
        </FooterContact>
      </FooterSection>
    </FooterInnerContainer>
    <FooterRights>&copy; 2023 CocktailZ. All rights reserved.</FooterRights>
  </FooterContainer>
);
