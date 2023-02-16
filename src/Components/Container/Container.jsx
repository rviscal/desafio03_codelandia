import React, { useEffect, useState } from "react";
import { CtDiv, BoxDiv, ColorDiv, H1box, Pbox } from "./Style";
import { Data } from "./Data";
import { getCards } from "../../services/cards-api";

function Container() {
  const [cards, setCards] = useState([]);

  async function getAllCards() {
    const promise = await getCards();
    setCards(promise);
  }

  console.log(cards);

  useEffect(() => {
    getAllCards();
  }, []);

  const listitem = cards.map((item, i) => (
    <BoxDiv key={i}>
      <ColorDiv style={{ backgroundColor: `${item.color}` }} />
      <H1box> {item.title}</H1box>
      <Pbox> {item.description}</Pbox>
    </BoxDiv>
  ));

  return <CtDiv>{listitem}</CtDiv>;
}
export default Container;
