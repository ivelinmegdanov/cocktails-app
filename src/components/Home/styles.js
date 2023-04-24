import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OnlineBarSection = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #fff;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
    color: #fff;
  }

  .button {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0);
    border-radius: 10px;
    margin-bottom: 50px;
    text-decoration: none;
  }
  
  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  

  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    box-shadow: rgb(255 255 255 / 80%) 0px 0px 11px 1px;
    filter: brightness(80%)
  }
`;