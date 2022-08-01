import { ContainerContacto, ContainerImagenContacto, ContainerTextoContacto, ItemImagenContacto, ItemTextoContacto } from "../style/contactoStyle"

export const Contacto = () => {
    return (
        <>
        
            <ContainerContacto>

                <ContainerImagenContacto>

                    <ItemImagenContacto/>

                </ContainerImagenContacto>

                <ContainerTextoContacto>

                    <ItemTextoContacto>

                    Soy desarrollador Full Stack, transitando el mundo IT. 
                    Me siento cómodo trabajando tanto en el Back-end como en el Front-end, 
                    ya que me gusta mucho la lógica y me gusta sentarme y pensar las cosas hasta que funcionan. 
                    Cuento con manejo de GIT y metodologías ágiles SCRUM. 

                    </ItemTextoContacto>

                </ContainerTextoContacto>

            </ContainerContacto>
        
        </>
    )
}