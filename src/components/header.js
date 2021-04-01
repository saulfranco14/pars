import * as React from "react"
import {
  HeaderDiv,
  DivPrincipal,
  Navegation,
  TitleHeader
} from '../styled-components/header.styles';

const Header = () => {
  return ( 
    <React.Fragment>
      <HeaderDiv>
        <DivPrincipal>
          <TitleHeader>
            Pars
          </TitleHeader>
          <Navegation>
            Nav
          </Navegation>
        </DivPrincipal>
      </HeaderDiv>
    </React.Fragment>
   );
}
 
export default Header;


