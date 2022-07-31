import { Logos } from "../assets/logos/arrayLogos"
import { ContainerIconosTecnologias, ContainerTituloTecnologias, IconosTecnologis, ItemIconosTecnologias, ItemTituloTecnologias, MainTecnologias } from "../style/tecnologiasStyle"

export const Tecnologias = () => {
    return (
        <>
        
            <MainTecnologias>

                <ContainerTituloTecnologias>

                    <ItemTituloTecnologias>

                        Tecnologias

                    </ItemTituloTecnologias>

                </ContainerTituloTecnologias>

                <ContainerIconosTecnologias>

                    {
                        Logos.map(el => {
                            return <ItemIconosTecnologias>

                                        <IconosTecnologis src={el}/>

                                    </ItemIconosTecnologias>
                        })
                    }

                </ContainerIconosTecnologias>

            </MainTecnologias>
        
        </>
    )
}