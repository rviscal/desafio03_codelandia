import styled from "styled-components";

export const Fform = styled.form`
  display: flex;
  flex-direction: column;
  margin-top:10px;
`;
export const Finput = styled.input`
  width: 470px;
  height: 65px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  margin-top: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 0px;
  }
`;
export const Ftextarea = styled.textarea`
  width: 470px;
  height: 165px;
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
