import { 
    ContainerContacto, 
    ContainerContacto2, 
    ContainerIconContacto, 
    ContainerItemContacto, 
    // ItemIconContacto, 
    ItemtContenidoContacto, 
    ItemtTituloContacto 
} from "../style/contactoStyled"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { EnlaceProyectosPage } from "../style/proyectosPageStyle";

export const Contacto = () => {
    return (
        <ContainerContacto>

            <ContainerContacto2>
            
                    <ItemtTituloContacto>
                        Info de Contacto
                    </ItemtTituloContacto>

                <ContainerItemContacto>
            
                    <ItemtTituloContacto>
                        Email
                    </ItemtTituloContacto>

                    <ItemtContenidoContacto>
                        vicentemillan1992@gmail.com
                    </ItemtContenidoContacto>
            
                </ContainerItemContacto>

                <ContainerItemContacto>
            
                    <ItemtTituloContacto>
                        Celular/WhatSapp
                    </ItemtTituloContacto>

                    <ItemtContenidoContacto>
                        +54 1164786787
                    </ItemtContenidoContacto>
            
                </ContainerItemContacto>

                <ContainerItemContacto>
            
                    <ItemtTituloContacto>
                        Redes Sociales
                    </ItemtTituloContacto>

                    <ItemtContenidoContacto>

                        <EnlaceProyectosPage href='https://www.linkedin.com/in/vicente-millan-4b3536128/' target='_blank'>
                            <FaLinkedin/>
                        </EnlaceProyectosPage>

                        <EnlaceProyectosPage href='https://twitter.com/Vicentemillan14' target='_blank'>
                            <FaTwitterSquare/>
                        </EnlaceProyectosPage>
                    
                    </ItemtContenidoContacto>
            
                </ContainerItemContacto> 

            </ContainerContacto2>

            <ContainerIconContacto>
                
                {/* <ItemIconContacto src={iconContacto}/> */}

            </ContainerIconContacto> 

        </ContainerContacto>
    )
}