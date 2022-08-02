import { 
    ContainersobreMi, 
    ContainerImagensobreMi, 
    ContainerTextosobreMi, 
    ItemImagensobreMi, 
    ItemTextosobreMi 
} from "../style/sobreMiStyle"
import imgProfile from '../assets/Vicente-millan.png'

export const SobreMi = () => {
    return (
        <>
        
            <ContainersobreMi>

                <ContainerImagensobreMi>

                    <ItemImagensobreMi src={imgProfile}/>

                </ContainerImagensobreMi>

                <ContainerTextosobreMi>

                    <ItemTextosobreMi>

                    Hola, me llamo Vicente Millan. Soy desarrollador Full Stack, transitando el mundo IT. 
                    Me siento cómodo trabajando tanto en el Back-end como en el Front-end, 
                    ya que me gusta mucho la lógica y me gusta sentarme y pensar las cosas hasta que funcionan. 
                    Cuento con manejo de GIT y metodologías ágiles SCRUM.

                    </ItemTextosobreMi>

                    <ItemTextosobreMi>

                    Una de las cosas que mas me apasionan del mubnfo de la tegnologia,
                    es tu creatividad, tu razonamiento y tu conocimiento es lo que mas valen,
                    es lo que hace la diferencia.

                    </ItemTextosobreMi>

                </ContainerTextosobreMi>

            </ContainersobreMi>
        
        </>
    )
}