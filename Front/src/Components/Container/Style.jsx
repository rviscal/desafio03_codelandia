import styled from "styled-components";

export const CtDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  width: 100%;
  height: 1214px;
  background: white;
  grid-column-gap: 100px;
  grid-row-gap: auto;
  align-items:center;
`;

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 423px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;
export const ColorDiv = styled.div`
  width: 340px;
  height: 222px;
`;
export const H1box = styled.h1`
  width: 282px;
  font-size: 24px;
  color: #2b2b2b;
  margin-bottom: 0px;
`;
export const Pbox = styled.p`
  font-size: 24px;
  color: #2b2b2b;
  width: 282px;
  height: 90px;
  margin-top: 10px;
`;
