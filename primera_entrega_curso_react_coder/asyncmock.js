const misProductos = [
    {
        id: "1",
        nombreArtista: "Taylor Swift",
        album: "1989",
        precio: "10€",
        img: "https://recordsale.de/600/600/taylorswift-1989(2).jpg",
        stock: 5,
        idCat:"cd"
    },
    {
        id: "2",
        nombreArtista: "Rosalía",
        album: "El malquerer",
        precio: "12€",
        img: "https://i.discogs.com/gK2OYqKT5m__7dGpSEQvgukGD7j_nj3Vj82ivSJCHws/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzQ2/NTk4LTE1NDExNzQx/MTMtODA2OC5qcGVn.jpeg",
        stock: 10,
        idCat:"vinilos"
    },
    {
        id: "3",
        nombreArtista: "Toto",
        album: "IV",
        precio: "6€",
        img: "https://i.discogs.com/6iD9FWau_13-_E-Vous1lNC-GRC0vdnxeyjTPx7I6sQ/rs:fit/g:sm/q:90/h:508/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODI3/MjAtMTMwNTUzMzQy/OS5qcGVn.jpeg",
        stock: 3,
        idCat:"cassettes"
    },
]

export const getProductos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getProductoIndividual = (id) => {
    return new Promise(resolve=>{
        setInterval(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const categoriaProductos = misProductos.filter(item => item.idCat === idCategoria)
            resolve(categoriaProductos)
        },100)
    })
}