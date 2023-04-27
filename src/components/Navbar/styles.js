import styled from 'styled-components';

export const NavbarComponent = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgb(255 255 255 / 80%) 0px 0px 20px 1px;

    .logo__container {
        padding: 20px 0 0 0;
    }
    .logo {
        color: black;
        font-size: 30px;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .links {
        padding: 20px;
        display: flex;
        gap: 50px;
    }

    .navbar__link {
        color: black;
        font-size: 20px;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
    }
    .navbar__link:hover {
        color: rgba(0, 0, 0, 0.652);
    }

    @media (max-width: 768px) {
        flex-direction: column;
    
        .links {
          flex-direction: column;
          gap: 20px;
          padding: 0;
          text-align: center;
          padding: 30px 20px
        }
    
        .navbar__link {
          font-size: 18px;
        }
      }
`;