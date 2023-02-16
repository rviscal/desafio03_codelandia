import styled from "styled-components";

export const DivModal = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
export const InpColor = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const ButtonAply = styled.button`
  width: 75px;
  height: 50px;
  margin-left: 10px;
`;
