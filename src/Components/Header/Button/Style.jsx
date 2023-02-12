import styled from "styled-components";

export const BtnH = styled.button`
  background: #6c63ff;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
  border-radius: 5px;
  width: 200px;
  height: 50px;
  margin-top: 5%;
  font-family: "lato";
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
