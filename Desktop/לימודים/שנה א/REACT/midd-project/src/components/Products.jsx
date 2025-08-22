import React from 'react'

  // loginUser={loginUser} currentUser={currentUser} 

const Products = ({ allProducts, Buy, detailedPrduct, search, searchVal, filteredProduct }) => {
const productsToShow  = searchVal ? filteredProduct : allProducts;
  
return (
    <div className='pageDiv'>
      <div>
      <h2>ניהול מוצרים</h2>
      {
        isAdmin && (
          <div>
            <button>➕ הוספת מוצר חדש</button>
          <button>🗑️ מחיקת מוצר</button>
        </div>
        )}
      </div>
      
      <h2>מוצרים!</h2>
      <header>
        <form>
          <input id='search' placeholder='search' onChange={(event) => search (event.target.value)} value={searchVal} />
        </form>
      </header>
      {/* הוספת רובריקות ריבועים לבחירת קטגוריה של מוצרים  */}
      {Array.isArray(productsToShow ) && productsToShow.map((product) => (
        <div key={product.code} className='productCard'>
          <p>{product.name}</p>
          <p>{product.code}</p>
          <p>{product.price}</p>
          <img src={'./images/' + product.img} alt='img not found' />
          <button onClick={() => Buy(product)}>לרכישה</button>
          <button onClick={() => detailedPrduct(product)}>פרטים נוספים</button>
          </div>
      ))}
    </div>
  )
}

export default Products