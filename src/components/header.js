import * as React from "react"
import Navegacion from './nav';
import {
  HeaderDiv,
  DivPrincipal,
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
        <Navegacion/>
        </DivPrincipal>
      </HeaderDiv>
    </React.Fragment>
   );
}
 
export default Header;


