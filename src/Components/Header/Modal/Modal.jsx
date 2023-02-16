import React from "react";
import { InpColor, ButtonAply, DivModal } from "./Style";

function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <DivModal>
        <InpColor type="Color" />;
        <ButtonAply>Aplicar</ButtonAply>
      </DivModal>
    );
  }
  return null;
}
export default Modal;
