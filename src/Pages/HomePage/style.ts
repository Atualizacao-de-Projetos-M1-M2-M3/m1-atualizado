import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;

  div {
    width: 95%;
    height: 100px;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    span {
      font-size: 28px;
      font-weight: bold;
    }
    div {
      align-items: center;
      justify-content: flex-end;
      gap: 10px;

      button {
        font-size: 18px;
        background: none;
        border: none;
      }
    }
  }

  @media (min-width: 768px) {
    div {
      div {
        gap: 20px;
      }
    }
  }
`;

export const StyledMain = styled.main`
  margin-top: 42px;
  margin-bottom: 42px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100vw;

  .container__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;

    button {
      height: 30px;
      font-size: 16px;
      font-weight: 500;
      align-self: center;
      justify-self: center;
      border-radius: 8px;
      border: none;
      :hover {
        color: blue;
        transition: 0.3s;
      }
    }
  }
  .container__bottom {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 90vw;
    margin: 0 auto;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 10px;
    }

    ul {
      width: 69%;
      display: flex;
      align-self: center;
      flex-wrap: wrap;
      height: 50vh;
      overflow-y: auto;
      gap: 32px;
    }
  }
  @media (min-width: 500px) {
    .container__top {
      width: 425px;
    }
  }

  @media (min-width: 768px) {
    .container__bottom {
      ul {
        /* display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px; */
      }
    }
  }
`;
