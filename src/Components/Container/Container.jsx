import React from "react";
import { CtDiv,BoxDiv, ColorDiv,H1box,Pbox } from "./Style";
import { Data } from "./Data";

function Container() {
  const listitem = Data.map(
    (item, i) =>
        <BoxDiv key={i}>
            <ColorDiv style= {{ backgroundColor: `${item.bcolor}`}}/>
            <H1box> {item.htex1}</H1box>
            <Pbox> {item.ptex1}</Pbox>
        </BoxDiv>
)
  return (
  <CtDiv>
    {listitem}
    </CtDiv>
)}
export default Container;
