import { useState } from "react"

export const useRender = () => {
    const  [render, setRender] = useState(() => {
        const local = localStorage.getItem('render')
        return !local ? true : JSON.parse(local)
    })

    const onRender = () => {
        localStorage.setItem('render', true)
        setRender(true)
    }

    const ofRender = (value) => {
        localStorage.setItem('render', false)
        setRender(false)
    }

    return {
        render,
        onRender,
        ofRender
    }

}