import styled from "styled-components";

export const StyledFielset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100px;
  align-items: flex-end;
  margin-top: -45px;

  div {
    width: 100%;
    position: relative;
    justify-content: flex-end;
    margin: 0 auto;
    margin-bottom: -25px;
    margin-top: -15px;

    label {
      display: none;
    }
    input {
      width: 200px;
      height: 32px;
      padding-left: 10px;
      background-color: rgb(225 225 225 / 46%);
      border: none;
      border-radius: 8px;
      color: black;
      font-weight: 500;
      margin-right: 1%;
    }

    button {
      position: absolute;
      top: 40%;
      right: 2%;
      border: none;
      font-size: 18px;
      background-color: transparent;
    }
  }
  p {
    margin-right: 20px;
  }
`;
