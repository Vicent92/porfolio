import { ContainerImgProyectosPage, ContainerProyectosPage, EnlaceProyectosPage, ImgProyectosPage } from "../style/proyectosPageStyle"
import preViewCalculadora from '../assets/Captura de pantalla 2022-08-11 132546.png'
import preViewGiffo from '../assets/Captura de pantalla 2022-08-11 132355.png'
import preViewTODOs from '../assets/Captura de pantalla 2022-08-11 132137.png'

export const ProyectosPage = () => {
    return (
        <ContainerProyectosPage>

            <ContainerImgProyectosPage>

                <EnlaceProyectosPage href='https://vicent92.github.io/Calculator/' target='_blank'>

                    <ImgProyectosPage src={preViewCalculadora}/>
                    
                </EnlaceProyectosPage>

            </ContainerImgProyectosPage>

            <ContainerImgProyectosPage>

                <EnlaceProyectosPage href='https://giffo.vercel.app/' target='_blank'>

                    <ImgProyectosPage src={preViewGiffo}/>
                    
                </EnlaceProyectosPage>

            </ContainerImgProyectosPage>

            <ContainerImgProyectosPage>

                <EnlaceProyectosPage href='https://todos-delta-ecru.vercel.app/' target='_blank'>

                    <ImgProyectosPage src={preViewTODOs}/>

                </EnlaceProyectosPage>

            </ContainerImgProyectosPage>

        </ContainerProyectosPage>
    )
} 