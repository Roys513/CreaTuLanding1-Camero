import { useEffect, useState } from "react"
import { getProductos, getProductosPorCategoria } from "../../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ()=>{
      const [productos, setProductos] = useState([])


      const {idCategoria} = useParams()

    useEffect(()=>{
      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
      funcionProductos(idCategoria)
      .then(res=> setProductos(res))

    }, [idCategoria])
    return (
      <>
        <div className="i_l_container">

        <ItemList albumes={productos}/>
        
        </div>
      </>
  )
}
export default ItemListContainer