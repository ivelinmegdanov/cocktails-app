import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

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
  Socials,
  SocialIconLink,
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
        <FooterTitle>Follow Us</FooterTitle>
        <Socials>
          <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
        </Socials>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterContact>
          <FooterContactLink href="tel:0889337266">
            088 933 7266
          </FooterContactLink>
          <FooterContactLink href="mailto:ivelin@devlabs.bg">
            ivelin@devlabs.bg
          </FooterContactLink>
        </FooterContact>
      </FooterSection>
    </FooterInnerContainer>
    <FooterRights>&copy; 2023 CocktailZ. All rights reserved.</FooterRights>
  </FooterContainer>
);
