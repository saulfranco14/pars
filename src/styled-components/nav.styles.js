import styled from "styled-components";
import { Link } from 'gatsby';

export const Nav = styled.nav`

    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        padding-bottom: 0rem;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    /* Para quitar el ultimo margen(ultimo elemento) */
    &:last-of-type{
        margin-right: 0;
    }

    /* Activará el active de la página actual */
    &.page-actual{
        border-bottom: 2px solid #fff;
    }
`