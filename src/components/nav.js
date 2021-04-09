import React, { Fragment } from 'react';
import { 
    Nav,
    NavLink
} from '../styled-components/nav.styles';



const Navegacion = () => {
    return ( 
        <Fragment>
            <Nav>
                <NavLink 
                    to={'/'} 
                    activeClassName="page-actual"
                >
                    Inicio
                </NavLink>
                <NavLink 
                    to={'/nosotros'} 
                    activeClassName="page-actual"
                >
                    Quienes Somos
                </NavLink>
            </Nav>
        </Fragment>
     );
}
 
export default Navegacion;