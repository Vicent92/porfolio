import { 
    ContainerContacto, 
    ContainerContacto2, 
    ContainerIconContacto, 
    ContainerItemContacto, 
    ItemIconContacto, 
    ItemtContenidoContacto, 
    ItemtTituloContacto 
} from "../style/contactoStyled"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import iconContacto from '../assets/undraw_Personal_text_re_vqj3.png'

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
                        <FaLinkedin/>
                        <FaTwitterSquare/>
                    </ItemtContenidoContacto>
            
                </ContainerItemContacto> 

            </ContainerContacto2>

            <ContainerIconContacto>
                
                {/* <ItemIconContacto src={iconContacto}/> */}

            </ContainerIconContacto> 

        </ContainerContacto>
    )
}