import styled from "styled-components";
import { fonts } from "../fonts/globalFonts";

export const ContainerContacto = styled.div`
    width: 100%;
    height: 100%;
    /* background: red; */

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerTextoContacto = styled.div`
    width: 500px;
    height: 100%;
    /* background: blue; */
`

export const ItemTextoContacto = styled.div`
@font-face {
    font-family: 'regular';
    src: url(${fonts.textos});
  }
    width: 100%;
    height: 350px;
    /* background: green; */
    font-size: 25px;
    font-family: 'regular';
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerImagenContacto = styled.div`
    width: 500px;
    height: 100%;
    /* background: blue; */

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemImagenContacto = styled.div`
    width: 300px;
    height: 300px;
    background: black;
    border-radius: 50%;
`