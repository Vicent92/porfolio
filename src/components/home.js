import { 
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

                    <ContainerItemsNavBar>

                        <ItemsNavBar>
                            <VscGithubInverted/>
                        </ItemsNavBar>

                        <ItemsNavBar>
                            Vicent92
                        </ItemsNavBar>

                    </ContainerItemsNavBar>

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