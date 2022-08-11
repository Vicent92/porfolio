import { EnlaceProyectosHome, ItemProyectosHome } from "../style/proyectosHomeStyle"

const proyectos = [
    {
        name: 'Calculadora',
        enlace: 'https://vicent92.github.io/Calculator/'
    },

    {
        name: 'Giffo',
        enlace: 'https://giffo.vercel.app/'
    },

    {
        name: 'TODOs',
        enlace: 'https://todos-delta-ecru.vercel.app/'
    }
]

export const ProyectosHomeItems = () => {
    return (
        <>
        
            {
                proyectos.map(names => {
                    return <EnlaceProyectosHome href={names.enlace} target="_blank">
                            <ItemProyectosHome>
                                {names.name} 
                            </ItemProyectosHome>
                           </EnlaceProyectosHome>
                } )
            }
        
        </>
    )
}