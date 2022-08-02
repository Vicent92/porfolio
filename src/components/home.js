import { 
    ContainerGitNavBar,
    ContainerItemsNavBar, 
    ContainerMain,
    ItemsNavBar, 
    Main, 
    NavBar 
} from "../style/homeStyle"
import { VscGithubInverted } from "react-icons/vsc";
import { Outlet } from "react-router";
import { LinkGlobal } from "../style/styleGlobal";
import { useContext } from "react";
import { contexto } from "./context";

export const Home = () => {
    const { ofRender, onRender } = useContext(contexto)

    return (
        <>
        
            <ContainerMain>
                
                <NavBar>

                    <ContainerGitNavBar href="https://github.com/Vicent92">

                        <ItemsNavBar>
                            <VscGithubInverted/>
                        </ItemsNavBar>

                        <ItemsNavBar>
                            Vicent92
                        </ItemsNavBar>

                    </ContainerGitNavBar>

                    <ContainerItemsNavBar>

                        <LinkGlobal to='/'>
                        
                            <ItemsNavBar onClick={onRender}>
                                Home
                            </ItemsNavBar>

                        </LinkGlobal>

                        <ItemsNavBar>
                            Proyectos
                        </ItemsNavBar>

                        <LinkGlobal to='sobremi'>
                            
                            <ItemsNavBar onClick={ofRender}>
                                Sobre mi
                            </ItemsNavBar>

                        </LinkGlobal>
                        
                        <LinkGlobal to='contacto'>
                        
                            <ItemsNavBar onClick={ofRender}>
                                Contacto
                            </ItemsNavBar>

                        </LinkGlobal>          

                    </ContainerItemsNavBar>

                </NavBar>

                <Main>

                    <Outlet/>

                </Main>

            </ContainerMain> 
        
        </>
    )
}