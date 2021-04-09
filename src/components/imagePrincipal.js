import React, { Fragment }              from 'react';
import { graphql, useStaticQuery }      from 'gatsby';
import styled           from "styled-components"

// import { ImageDiv }                     from '../styled-components/imagePrincipal.styles';
import BackgroundImage  from 'gatsby-background-image'

const ImageDiv = styled(BackgroundImage)`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    height: 400px;
    width: 600px;
`


const Images = () => {

    const { image } = useStaticQuery(graphql`
        query{
            image: file( relativePath: { eq: "pars_5.png"} ) {
                sharp: childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }   
            }    
        }
    `);

    console.log(image.sharp.fluid);

    return ( 
        <Fragment>
            <ImageDiv
                tag="section"
                fluid = { image.sharp.fluid }
                fadeIn="soft"
            >

            </ImageDiv>
        </Fragment>
    );
}
 
export default Images;