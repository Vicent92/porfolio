import { createContext } from "react"
import { useRender } from "../../hooks/useRender"

const contexto = createContext()

const Context = ({ children }) => {
    const { render, onRender, ofRender } = useRender(true)
    
    return (
        
        <contexto.Provider value={
            {
                render,
                onRender,
                ofRender
            }
        }>

            {children}

        </contexto.Provider>

    )
}

export { Context, contexto }