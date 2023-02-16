import React from "react";
import {  DivModal, Mh1 } from "./Style";
import FormM from "./FormM/FormM";

function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <DivModal>
        <Mh1>Preencha o Formulario</Mh1>
        <FormM />
      </DivModal>
    );
  }
  return null;
}
export default Modal;
