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

export const Home = () => {
    return (
        <>
        
            <ContainerMain>
                
                <NavBar>

                    <ContainerGitNavBar>

                        <ItemsNavBar>
                            <VscGithubInverted/>
                        </ItemsNavBar>

                        <ItemsNavBar>
                            Vicent92
                        </ItemsNavBar>

                    </ContainerGitNavBar>

                    <ContainerItemsNavBar>

                        <ItemsNavBar>
                            Proyectos
                        </ItemsNavBar>
                            
                        <ItemsNavBar>
                            Sobre mi
                        </ItemsNavBar>

                        <LinkGlobal to='contacto'>
                        
                            <ItemsNavBar>
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