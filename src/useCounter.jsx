import { useState } from "react"

export const useCounter = () =>{
    //hooks = archivo de js que contiene la lógica de los
    //funcional components
    //hook useState = redenrizar un component en react
    //setFirst sirve para cambiar el valor de la variable
    //init sirve para inicializar la variable
    //const [first, setFirst] = useState(init)
    
    const [counter , setCounter] = useState(0)

    const handleMasUno = ()=> {
        setCounter(counter +1)
    }

    const handleMenosUno = ()=> {
        setCounter(counter -1)
    }

    const handleReset = ()=> {
        setCounter(0)
    }
        
    //retorno del hook
    return{
        counter,
        handleMasUno,
        handleMenosUno,
        handleReset
    }
 }