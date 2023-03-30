import styled from "styled-components";

export const Mform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MCorInp = styled.input`
  width: 280px;
  height: 45px;
  background: #ffffff;
  margin-bottom: 20px;
  margin-right: 70px;
`;
export const InpColor = styled.input`
  position: fixed;
  width: 50px;
  height: 45px;
  margin-left: 300px;
  padding: 0px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const MTituloInp = styled.input`
  width: 350px;
  height: 45px;
  background: #ffffff;
`;
export const Mtextarea = styled.textarea`
  width: 350px;
  height: 100px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  padding-top: 30px;
  margin-top: 20px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 0px;
  }
`;
export const ButtonAply = styled.button`
  width: 350px;
  height: 50px;
  margin: 20px;
`;
