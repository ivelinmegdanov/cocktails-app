import styled from "styled-components";

export const CocktailContainer = styled.div`
  .coctails {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 150px;
  }

  .cocktails__search {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .search {
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    width: 13em;
    border-radius: 1rem;
    color: black;
    width: 400px;
  }
  .search:focus {
    outline-color: black;
  }

  .random__btn {
    transition: all 0.3s ease;
    border-radius: 15px;
    padding: 5px 15px;
  }
  .random__btn:hover {
    transform: scale(1.05);
  }

  .random__cocktail {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .cocktails__title {
    color: white;
    margin-top: 50px;
    text-align: center;
    font-size: 45px;
  }

  @keyframes square-animation {
    0% {
     left: 0;
     top: 0;
    }
   
    10.5% {
     left: 0;
     top: 0;
    }
   
    12.5% {
     left: 32px;
     top: 0;
    }
   
    23% {
     left: 32px;
     top: 0;
    }
   
    25% {
     left: 64px;
     top: 0;
    }
   
    35.5% {
     left: 64px;
     top: 0;
    }
   
    37.5% {
     left: 64px;
     top: 32px;
    }
   
    48% {
     left: 64px;
     top: 32px;
    }
   
    50% {
     left: 32px;
     top: 32px;
    }
   
    60.5% {
     left: 32px;
     top: 32px;
    }
   
    62.5% {
     left: 32px;
     top: 64px;
    }
   
    73% {
     left: 32px;
     top: 64px;
    }
   
    75% {
     left: 0;
     top: 64px;
    }
   
    85.5% {
     left: 0;
     top: 64px;
    }
   
    87.5% {
     left: 0;
     top: 32px;
    }
   
    98% {
     left: 0;
     top: 32px;
    }
   
    100% {
     left: 0;
     top: 0;
    }
   }
   
   .loader {
    position: relative;
    width: 96px;
    height: 96px;
    transform: rotate(45deg);
   }
   
   .loader-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    margin: 2px;
    border-radius: 0px;
    background: white;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    animation: square-animation 10s ease-in-out infinite both;
   }
   
   .loader-square:nth-of-type(0) {
    animation-delay: 0s;
   }
   
   .loader-square:nth-of-type(1) {
    animation-delay: -1.4285714286s;
   }
   
   .loader-square:nth-of-type(2) {
    animation-delay: -2.8571428571s;
   }
   
   .loader-square:nth-of-type(3) {
    animation-delay: -4.2857142857s;
   }
   
   .loader-square:nth-of-type(4) {
    animation-delay: -5.7142857143s;
   }
   
   .loader-square:nth-of-type(5) {
    animation-delay: -7.1428571429s;
   }
   
   .loader-square:nth-of-type(6) {
    animation-delay: -8.5714285714s;
   }
   
   .loader-square:nth-of-type(7) {
    animation-delay: -10s;
   }
`;

export const CocktailCardContainer = styled.div`
  transition: all 0.3s ease;
  width: 30%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  box-shadow: 0px 0px 11px 1px rgb(255 255 255 / 80%);

  &:hover {
    transform: scale(1.05);
  }

  .cocktail__card:hover {
    transform: scale(1.05);
  }
  .card__img {
    width: 100%;
  }
  .card__label {
    background-color: white;
    font-size: 20px;
    text-align: center;
  }
  .card__props {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  }
  .card__title {
    color: white;
    margin-top: 20px;
    font-size: 20px;
  }
  .card__desc {
    font-size: 18px;
    color: white;
    text-align: center;
    margin-top: 10px;
  }
  .card__buttons {
    padding: 20px;
    display: flex;
    gap: 20px;
  }
  .card__button {
    transition: all 0.2s ease;
    background-color: white;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 15px;
  }
  .card__button:hover {
    box-shadow: 0px 0px 11px 1px rgb(255 255 255 / 80%);
  }
`;

export const CocktailDetailsContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 20px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  box-shadow: 0 0 10px #ffffff;
  margin-bottom: 100px;

  ul {
    list-style-type: none;
  }

  .card__img {
    width: 100%;
    min-height: 200px;
    max-height: 550px;
    box-shadow: rgb(255 255 255) 0px 0px 10px;
    object-fit: cover;
  }
  .details__img {
    width: 50%;
  }
  .details__props {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 70%;
  }
  .details__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
  }
  .details__desc {
    font-size: 20px;
    text-align: center;
  }
`;
