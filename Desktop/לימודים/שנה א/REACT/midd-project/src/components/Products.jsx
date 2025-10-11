import React, { useState }  from 'react'


const Products = ({ allProducts, Buy, detailedPrduct, search, searchVal, filteredProduct, isAdmin, handleDeleteProduct, handleAddProduct}) => {
const productsToShow  = searchVal ? filteredProduct : allProducts;

  // State של  המוצר החדש
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductCode, setNewProductCode] = useState('');
  const [newProductFile, setNewProductFile] = useState(null); // מצב חדש לקובץ התמונה
  const [imgPreview, setImgPreview] = useState(null); // מצב לתצוגה מקדימה של התמונה
  

  const handleAddSubmit = (e) => {
    e.preventDefault(); // מונע ריענון דף
    if (!newProductName || !newProductPrice || !newProductCode || !newProductFile) {
      alert("אנא מלא את כל השדות והוסף תמונה");
      return;
    }
    // קורא לפונקציה מהקומפוננטה הראשית עם נתוני הטופס
    handleAddProduct({ name: newProductName, price: newProductPrice, code: newProductCode, img: newProductFile });
    // מאפס את שדות הקלט
    setNewProductName('');
    setNewProductPrice('');
    setNewProductCode('');
    setNewProductFile(null);
    setImgPreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProductFile(file);
      // יצירת URL מקומי לתצוגה מקדימה
      setImgPreview(URL.createObjectURL(file));
    }
  };
  
    // פונקציה עזר לקביעת הנתיב הנכון לתמונה
    const getImagePath = (imageName) => {
      if (imageName && imageName.startsWith('blob:')) {
        return imageName;
      } else {
        return `./images/${imageName}`;
      }
    };

  
return (
    <div className='pageDiv'>
      <h2>מוצרים!</h2>
      <header>
        <form>
          <input id='search' placeholder='search' onChange={(event) => search (event.target.value)} value={searchVal} />
        </form>
      </header>
      {/* הוספת מוצר חדש - למנהל */}
      {isAdmin && (
        <div className='addProductForm'>
          <h3>הוספת מוצר חדש</h3>
          <form onSubmit={handleAddSubmit}>
            <input placeholder="שם מוצר" value={newProductName} onChange={e => setNewProductName(e.target.value)} required />
            <input placeholder="מחיר" type="number" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)} required />
            <input placeholder="קוד מוצר" value={newProductCode} onChange={e => setNewProductCode(e.target.value)} required />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {imgPreview && <img src={imgPreview} alt="תצוגה מקדימה של תמונה" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />} 
            <button type="submit">הוסף מוצר</button>
          </form>
        </div>
      )}
      {Array.isArray(productsToShow ) && productsToShow.map((product) => (
        <div key={product.code} className='productCard'>
          <p>{product.name}</p>
          <p>{product.code}</p>
          <p>{product.price}</p>
          <img src={getImagePath(product.img)} alt='img not found' />
          <button onClick={() => Buy(product)}>לרכישה</button>
          <button onClick={() => detailedPrduct(product)}>פרטים נוספים</button>
          {isAdmin && (
          <button onClick={() => handleDeleteProduct(product.id)}>🗑️</button>         )}
          </div>
      ))}
    </div>
  )
}

export default Products