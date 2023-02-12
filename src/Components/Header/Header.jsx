import React from "react";
import { Hdiv, Hh1, Hp, Himg, HdivText } from "./Style";
import Himage from "../../Assets/HeaderImg.png";
import Buttonh from "./Button/Button";

function Header() {
  return (
    <Hdiv>
      <HdivText>
        <Hh1>Lorem ipsum dolor sit amet</Hh1>
        <Hp>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          massa sit amet augue consectetur ullamcorper non ac massa.
        </Hp>
        <Buttonh />
      </HdivText>
      <Himg src={Himage} />
    </Hdiv>
  );
}
export default Header;
