import { ContainerItemsMain, IlustracionMain, ItemsMain } from "../style/homeStyle"
import  ilustacion from '../assets/working-from-home.png'

export const LangePage = () => {
    return(
        <>
        
        <ContainerItemsMain>

            <ItemsMain>
                FullStack Developer
            </ItemsMain>

            <ItemsMain>
                
                <IlustracionMain src={ilustacion}/>

            </ItemsMain>

        </ContainerItemsMain>

        </>
    )
}