import styled from "styled-components";
import { fonts } from "../fonts/globalFonts";

export const ContainersobreMi = styled.div`
    width: 100%;
    height: 100%;
    /* background: red; */

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerTextosobreMi = styled.div`
    width: 500px;
    height: 100%;
    /* background: blue; */

    display : flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ItemTextosobreMi = styled.div`
@font-face {
    font-family: 'regular';
    src: url(${fonts.textos});
  }
    width: 100%;
    /* height: 350px; */
    /* background: green; */
    font-size: 25px;
    font-family: 'regular';
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerImagensobreMi = styled.div`
    width: 500px;
    height: 100%;
    /* background: blue; */

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemImagensobreMi = styled.img`
    width: 500px;
    height: 500px;
    background: black;
    border-radius: 50%;
`