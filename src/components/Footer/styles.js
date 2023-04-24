import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(0 0 0);
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding: 50px;
  box-shadow: rgb(255 255 255 / 80%) 0px 0px 20px 1px;
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const FooterTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 30px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgb(197 199 199);
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterContactLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-top: 10px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgb(197 199 199);
  }
`;

export const FooterRights = styled.p`
  margin-top: 50px;
  font-size: 14px;
  text-align: center;
`;
