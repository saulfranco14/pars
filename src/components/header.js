import * as React from "react"
import styled from "styled-components"

const TitleHeader = styled.h1`
  font-size: 28px;
  background-color: red;
  color: white;

`

const Header = () => {
  return ( 
    <React.Fragment>
      <TitleHeader>Header</TitleHeader>
    </React.Fragment>
   );
}
 
export default Header;


