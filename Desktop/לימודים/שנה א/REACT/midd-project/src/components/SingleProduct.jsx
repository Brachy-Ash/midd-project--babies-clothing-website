import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = ({ Buy }) => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className='singlePage'>
      <h2>{product.name}</h2>
      <div className='singleData'>
        <p>{product.name}</p>
        <p>code {product.code}</p>
        <p>price {product.price}</p>
        <button id='singleButton' onClick={() => Buy(product)}>לרכישה</button>
      </div>
      <div className='singleImg'>
        <img className='img' src={'./images/' + product.img} alt='img not found' />
      </div>
    </div>
  )
}
export default SingleProduct





// Array.isArray(allProducts) && allProducts.map((product) => (
//   <div key={product.code} className='productCard'>
