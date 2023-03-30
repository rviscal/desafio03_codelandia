import React from "react";
import { useState } from "react";
import {
  Mform,
  MCorInp,
  Mtextarea,
  ButtonAply,
  InpColor,
  MTituloInp,
} from "./Style";
import { createNewCard } from "../../../../services/cards-api";
function FormM() {
  const [color, setColor] = useState();
  const [title,setTitle] =  useState();
  const [description,setDescription] = useState();
  async function sync (){
  await createNewCard({title,color,description})
  }
  return (
    <Mform onSubmit={sync}>
      <MCorInp type="text" placeholder="Cor" value={color} onChange={(e)=>setColor(e.target.value)}/>
      <InpColor type="color" onChange={(e) => setColor(e.target.value)} value={color} />
      <MTituloInp type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Mtextarea type="textarea" placeholder="Digite Seu texto" value={description} onChange={e => setDescription(e.target.value)} />
      <ButtonAply>Aplicar</ButtonAply>
    </Mform>
  );
}
export default FormM;
