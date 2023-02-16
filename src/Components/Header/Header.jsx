import React, { useState } from "react";
import { Hdiv, Hh1, Hp, Himg, HdivText } from "./Style";
import Himage from "../../Assets/HeaderImg.png";
import { BtnH } from "./Button/Style";
import Modal from "./Modal/Modal";

function Header() {
  const [opeModal, setOpenModal] = useState(false);

  return (
    <Hdiv>
      <HdivText>
        <Hh1>Lorem ipsum dolor sit amet</Hh1>
        <Hp>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          massa sit amet augue consectetur ullamcorper non ac massa.
        </Hp>
        <BtnH
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Selecione a Cor
        </BtnH>
        <Modal isOpen={opeModal} />
      </HdivText>
      <Himg src={Himage} />
    </Hdiv>
  );
}
export default Header;
