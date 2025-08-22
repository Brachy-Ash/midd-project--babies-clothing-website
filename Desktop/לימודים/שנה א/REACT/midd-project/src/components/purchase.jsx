import React from 'react'

const purchase = ({ sum, cartSumCalc, cartSum, cartArr, purchasing }) => {
  

    return (
        <div className='pageDiv' onLoad={() => cartSumCalc()}>
            {/* הוספת רינדור מותנה אם העגלה ריקה להוסיף כיתוב מתאים ושליחה לדף המוצרים המלא */}
            <header>
                <h2>המוצרים שבחרת👶</h2>
                <h2>הסכום הסופי הינו {sum}</h2>
                <button type='button' onClick={purchasing}>אישור וקנייה</button>
            </header>
            {Array.isArray(cartArr) && cartArr.map((product) => (
                <div key={product.code} className='productCard'>
                    <p>{product.name}</p>
                    <p>price {product.price}</p>
                    <p>quantity {product.quantity}</p>
                    <p>total price {product.price * product.quantity}</p>
                    <img src={'./images/' + product.img} alt='img not found' />
                </div>
            ))}
        </div>
    )
}

export default purchase