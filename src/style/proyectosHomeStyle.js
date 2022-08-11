import styled from "styled-components";
import { fonts } from "../fonts/globalFonts";
import { colorElements } from "./paletterColor";

export const ContainerProyectosHome = styled.div`
    width: 100%;
    height: 500px;
    background: ${colorElements.background};
    /* background: red; */
`

export const ContainerTextProyectosHome = styled.div`
    width: 100%;
    height: 40%;
    /* background: blue; */

    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextProyectosHome = styled.div`
@font-face {
    font-family: 'semiRegular';
    src: url(${fonts.titulos});
  }
    font-size: 90px;
    font-family: 'semiRegular';
    color: ${colorElements.texto};
`

export const ContainerItemsProyectosHome = styled.div`
    width: 100%;
    height: 50%;
    /* background: red; */

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ItemProyectosHome = styled.div`
@font-face {
    font-family: 'regular';
    src: url(${fonts.textos});
  }
    width: 250px;
    height: 80px;
    background: ${colorElements.texto};
    /* background: blue; */
    font-size: 30px;
    font-family:'regular';
    color: ${colorElements.background};
    cursor: pointer;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover {
        width: 255px;
        height: 85px;
        font-size: 31px;
    }

`

export const EnlaceProyectosHome = styled.a`
    text-decoration: none;
`