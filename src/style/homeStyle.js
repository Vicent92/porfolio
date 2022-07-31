import styled from "styled-components";
import { fonts } from "../fonts/globalFonts";
import { colorElements } from "./paletterColor";

export const ContainerMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${colorElements.background};

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 12% auto;

`

export const NavBar = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1 / 3;
    background: ${colorElements.headline};

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`

export const ContainerItemsNavBar = styled.div`
    width: 30%;
    height: 50px;
    /* background: red; */

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
`

export const ItemsNavBar = styled.div`
@font-face {
    font-family: 'regular';
    src: url(${fonts.textos});
  }
    color: ${colorElements.background};
    font-family: 'regular';
    cursor: pointer;
    font-size: 20px;
`

export const ContainerGitNavBar = styled.div`
    width: 15%;
    height: 50px;
    /* background: red; */

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`

export const Main = styled.main`
     width: 100%;
    height: 100%;
    grid-column: 1 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerItemsMain = styled.div`
    width: 100%;
    height: 500px;
    /* background: red; */

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ItemsMain = styled.div`
@font-face {
    font-family: 'semiRegular';
    src: url(${fonts.titulos});
  }
    width: 45%;
    height: 550px;
    /* background: blue; */
    font-size: 120px;
    text-align: center;
    color: ${colorElements.texto};
    font-family: 'semiRegular';

    display: flex;
    justify-content: center;
    align-items: center;
`

export const IlustracionMain = styled.img`
    width: 100%;
    height: 600px;

`