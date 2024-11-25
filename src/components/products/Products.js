import React from 'react'
import ProductCard from './ProductCard'
import "./products.css"

const Products = ({products}) => {
  return (
    <div>
        <h1>Products Page :-</h1>

        {/* <div>
            {products.map((item, idx) => {
                return(
                    <h3 key = {idx}>{item.title}</h3>
                )
            })}
        </div> */}

  <div className='products-list'>
  {
    products.map((item, idx) => {
        return (
            <ProductCard key = {idx} item = {item}/>
        )
    })
   }
  </div>

    </div>
  )
}

export default Products