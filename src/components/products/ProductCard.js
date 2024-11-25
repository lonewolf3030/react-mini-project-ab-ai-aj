import React from 'react'
import "./productCard.css"

const ProductCard = ({item}) => {

    const trimDescription = (string) => {
        return string.substring(0, 15)
    }

    const trimTitle = (string) => {
        return string.substring(0, 10)
    }

  return (
    <div className='product-card'>
        <img src = {item.image} alt = "photo"/>

        <div className='text-content'>
        <h1>{trimTitle(item.title)}</h1>
        <p>{trimDescription(item.description)}</p>
        <h5>Price : {item.price}</h5>
        <h6>Category : {item.category}</h6>
        </div>

        
    </div>
  )
}

export default ProductCard