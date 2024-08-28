//Functional component

import { useCounter } from "./useCounter"

//para que funcione, tiene que retornar un componente HTML
export const App = () =>{

    const {counter, handleMasUno, handleMenosUno, handleReset} = useCounter()

    return(
        //fragments
        <>
            <h1>{counter}</h1>
            <button onClick={handleMasUno}>Do not press</button>
            <button onClick={handleMenosUno}>Press</button>
            <button onClick={handleReset}> Reset</button>
        </>

    )
}