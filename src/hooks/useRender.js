import { useState } from "react"

export const useRender = (initialValue) => {
    const  [render, setRender] = useState(initialValue)

    const onRender = () => setRender(true)

    const ofRender = () => setRender(false)

    return {
        render,
        onRender,
        ofRender
    }

}