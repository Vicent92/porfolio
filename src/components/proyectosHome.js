import { 
    ContainerItemsProyectosHome, 
    ContainerProyectosHome, 
    ContainerTextProyectosHome, 
    TextProyectosHome 
} from "../style/proyectosHomeStyle"
import { ProyectosHomeItems } from "./itemsProyectosHome"

export const ProyectosHome = () => {
    return (
        <ContainerProyectosHome>

            <ContainerTextProyectosHome>

                <TextProyectosHome>
                    Proyectos
                </TextProyectosHome> 

            </ContainerTextProyectosHome>

            <ContainerItemsProyectosHome>

                <ProyectosHomeItems/>

            </ContainerItemsProyectosHome>

        </ContainerProyectosHome>
    )
}