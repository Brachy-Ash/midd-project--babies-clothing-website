import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Babies = ({ allProducts, Buy, detailedPrduct, loginUser, currentUser }) => {
    // const navigate = useNavigate();

    // const goToDetails = (product) => {
    //     navigate('/SingleProduct', { state: { product } });

    // }

    return (
        <div className='pageDiv'>
            <h2>Babies!</h2>
            {Array.isArray(allProducts) && allProducts.map((product) => (
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

export default Babies

//2. קבלת התוכן בקומפוננטת הילד
//יצירת פונקציה שמקבלת ({אייטמס)} ומחזירה לדוג
//אנאורדר-ליסט  {אייטס.מאפ}(P)=<
//{items.map((p) => (,pry<li key={p.id}>{p.name}</li>
