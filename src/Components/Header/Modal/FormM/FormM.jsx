import React from "react";
import {
  Mform,
  MCorInp,
  Mtextarea,
  ButtonAply,
  InpColor,
  MTituloInp,
} from "./Style";

function FormM() {
  return (
    <Mform>
      <MCorInp type="text" placeholder="Cor" />
      <InpColor type="color" />
      <MTituloInp type="text" placeholder="Titulo" />
      <Mtextarea type="textarea" placeholder="Digite Seu texto" />
      <ButtonAply>Aplicar</ButtonAply>
    </Mform>
  );
}
export default FormM;
