import { useContext } from "react"
import { Routes } from "react-router"
import { Route } from "react-router"
import { SobreMi } from "./sobreMi"
import { contexto } from "./context"
import { Home } from "./home"
import { LangePage } from "./langePage"
import { Tecnologias } from "./tecnlogias"
import { Contacto } from "./contacto"
import { ProyectosHome } from "./proyectosHome"
import { ProyectosPage } from "./proyectosPage"

export const LayOut = () => {
    const { render } = useContext(contexto)

    console.log(render)
    if (render) {
        localStorage.setItem('render', true)
    }

    return  (
        <>
        
            <Routes>
                
                <Route path='/*' element={<Home/>}>

                    <Route path='' element={<LangePage/>}/>

                    <Route path='proyectos' element={<ProyectosPage/>}/>

                    <Route path='sobremi' element={<SobreMi/>}/>

                    <Route path='contacto' element={<Contacto/>}/>
                
                </Route>
            
            </Routes>

            {render && <Tecnologias/>} 

            {render && <ProyectosHome/>}      
        
        </>
    )
}