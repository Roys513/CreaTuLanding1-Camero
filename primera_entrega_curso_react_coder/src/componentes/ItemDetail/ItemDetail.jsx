import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombreArtista, album, precio, img, stock}) => {
  
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) =>{
      setAgregarCantidad(cantidad)
      console.log("Productos agregados: " + cantidad)
    }

  return (
    <div>
        <img src={img} alt={album} />
        <h2>{album}</h2>
        <h3>{nombreArtista}</h3>
        <h4>{precio}</h4>

        {
          agregarCantidad > 0 ?(<Link to='/cart'>Ir al carrito</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        
        }
    </div>
  )
}

export default ItemDetail