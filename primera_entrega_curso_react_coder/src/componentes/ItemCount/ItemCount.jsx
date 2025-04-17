import React, { useState } from 'react'

const ItemCount = ({stock, inicial, funcionAgregar}) => {
  
    const [contador, setContador] = useState(inicial)

    const incrementar = ()=> {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const disminuir = ()=> {
        if (contador > inicial){
            setContador(contador -1)
        }
    }

    return (
    <div>
        <div>
            <button onClick={incrementar}> + </button> <p>{contador}</p> 
            <button onClick={disminuir}> - </button>
        </div>
        <div>
            <button onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount