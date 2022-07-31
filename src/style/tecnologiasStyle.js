import styled from "styled-components";
import { fonts } from "../fonts/globalFonts";
import { colorElements } from "./paletterColor";

export const MainTecnologias = styled.main`
    width: 100%;
    min-height: 70vh;
    background: ${colorElements.headline};
`

export const ContainerTituloTecnologias = styled.div`
    width: 100%;
    height: 140px;
    /* background: red; */

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemTituloTecnologias = styled.div`
@font-face {
    font-family: 'semiRegular';
    src: url(${fonts.titulos});
  }
    width: 50%;
    height: 100px;
    font-size: 90px;
    /* background: blue; */
    color: ${colorElements.background};
    font-family: 'semiRegular';

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerIconosTecnologias = styled.div`
    width: 100%;
    height: 350px;
    /* background: yellow; */

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ItemIconosTecnologias = styled.div`
    width: 150px;
    height: 150px;
    /* background: red; */

    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconosTecnologis = styled.img`
    width: 130px;
    height: 120px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        width: 140px;
        height: 130px;
    }
`