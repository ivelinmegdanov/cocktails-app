import styled from "styled-components";

export const FavoritesContainer = styled.div`
  .coctails {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
  }
  .favorites__title {
    color: white;
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }

  .empty {
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: 100;
    margin-bottom: 400px;
  }
`;
