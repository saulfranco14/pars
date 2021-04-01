import styled from "styled-components"


export const HeaderDiv = styled.header`
    background-color: #333;
    padding: 1rem;
`;

export const TitleHeader = styled.h1`
    color: white;
    text-align: center;
`

export const DivPrincipal = styled.div`
    max-width: 1200px;
    max-height: 100%;
    margin: 0 auto;

    @media (min-width : 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`

export const Navegation = styled.p`
    color: white;
`