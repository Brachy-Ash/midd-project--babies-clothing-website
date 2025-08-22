import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartArr, minus, plus, detailedPrduct, deleteFromCart }) => {
  const navigate = useNavigate();

  // הגדרת תנאי לבדיקה אם העגלה ריקה
  const isCartEmpty = !cartArr || cartArr.length === 0;

  return (
    <div className='pageDiv'>

      {/* רינדור מותנה אם העגלה ריקה */}
      {isCartEmpty ? (
        <div className="empty-cart">
          <h2>🛒 העגלה שלך ריקה</h2>
          <p>לחצי כאן כדי לעבור לדף המוצרים ולהתחיל לקנות!</p>
          <button onClick={() => navigate('/products')}>מעבר לדף המוצרים</button>
        </div>
      ) : (
        cartArr.map((product) => (
          
          <div key={product.code} className='productCard'>
            <p>{product.name}</p>
            <p>price {product.price}</p>
            <p>quantity {product.quantity}</p>
            <p>total price {product.price * product.quantity}</p>
            <img src={'./images/' + product.img} alt='img not found' />
            <button onClick={() => detailedPrduct(product)}>פרטים נוספים</button>
            <button onClick={() => deleteFromCart(product)}>הסרה</button>
            <button onClick={() => minus(product.code)}>-</button>
            <button onClick={() => plus(product.code)}>+</button>
          </div>
          
        ))
      )}
    </div>
  );
};

export default Cart;