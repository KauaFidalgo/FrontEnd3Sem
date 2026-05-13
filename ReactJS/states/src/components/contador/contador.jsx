import { useState } from 'react'

export default function Contador() {

    //variéveis e states
    //funções

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)

        if (contador >= 10) {
            setContador(0)
        }
    }

    function decrementar() {
        setContador(contador - 1)

        if (contador <= 0) {
            setContador(0)
        }
    } 
        
    

    return(
        <div className='contador'>
            <h1 className='contador__title'>Contador {contador}</h1>

            <button onClick={incrementar}>
                Aperte e olha o numero aumentando!
            </button>
            <br />
            <button onClick={decrementar}>
                Aperte e olha o numero diminuindo!
            </button>


        </div>
    )   
}