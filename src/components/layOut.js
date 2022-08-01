import { Routes } from "react-router"
import { Route } from "react-router"
import { Contacto } from "./contacto"
import { Home } from "./home"
import { LangePage } from "./langePage"
import { Tecnologias } from "./tecnlogias"

export const LayOut = () => {
    return  (
        <>
        
            <Routes>
                
                <Route path='/*' element={<Home/>}>

                    <Route path='' element={<LangePage/>}/>

                    <Route path='contacto' element={<Contacto/>}/>
                
                </Route>
            
            </Routes>

            <Tecnologias/>       
        
        </>
    )
}