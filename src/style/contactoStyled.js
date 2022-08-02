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

export const ContainerContacto2 = styled.div`
    width: 700px;
    height: 100%;
    /* background: blue; */

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ContainerItemContacto = styled.div`
    width: 100%;
    height: 150px;
    /* background: green; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ItemtTituloContacto = styled.div`
@font-face {
    font-family: 'semiRegular';
    src: url(${fonts.titulos});
  }
    width: 100%;
    height: 80px;
    /* background: yellow; */
    font-family: 'semiRegular';
    font-size: 40px;

    display: flex;
    align-items: center;
`

export const ItemtContenidoContacto = styled.div`
@font-face {
    font-family: 'regular';
    src: url(${fonts.textos});
  }
    width: 100%;
    height: 50px;
    /* background: yellow; */
    font-family: 'regular';
    font-size: 30px;

    display: flex;
    align-items: center;

`

export const ContainerIconContacto = styled.div`
    width: 300px;
    height: 100%;
    /* background: blue; */

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemIconContacto = styled.img`
    width: 100%;
    height: 500px;
`