
const categorias = [
    { id: 1 , name:"Laptops", img:"/src/assets/img1.webp" },
    { id: 2 , name:"Smartphones", img:"/src/assets/img2.webp"  },
    { id: 3 , name:"Camaras", img:"/src/assets/img3.webp"  },
    { id: 4 , name:"Consoles", img:"/src/assets/img4.webp"  },
    { id: 5 , name:"Acesorios", img:"/src/assets/img5.webp"  },
]

function ItemListContainer({greetings}) {
    //console.log(categorias)
  return (
    <>
    <h2 className="text-decoration-underline">{greetings}</h2>
      {categorias.map( item  => (
        <div key={item.id} className="card text-bg-secondary mb-3 m-3" style={{width: '18rem'}}>
           <img src={item.img} className="card-img-top" alt="..." />
           <div className="card-body">
           <h5 className="card-title">{item.name}</h5>
           <a href="#" className="btn btn-primary">Comprar</a>
           </div>
        </div>
      ))}
    </>
  )
}

export default ItemListContainer

