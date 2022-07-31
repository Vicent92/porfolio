import { 
    ContainerGitNavBar,
    ContainerItemsMain, 
    ContainerItemsNavBar, 
    ContainerMain, 
    IlustracionMain, 
    ItemsMain, 
    ItemsNavBar, 
    Main, 
    NavBar 
} from "../style/homeStyle"
import  ilustacion from '../assets/working-from-home.png'
import { VscGithubInverted } from "react-icons/vsc";

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

                        <ItemsNavBar>
                            Contacto
                        </ItemsNavBar>

                    </ContainerItemsNavBar>

                </NavBar>

                <Main>

                    <ContainerItemsMain>

                        <ItemsMain>
                            FullStack Developer
                        </ItemsMain>

                        <ItemsMain>
                            
                            <IlustracionMain src={ilustacion}/>

                        </ItemsMain>

                    </ContainerItemsMain>

                </Main>

            </ContainerMain> 
        
        </>
    )
}