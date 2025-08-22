import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../context';

const Navbar = () => {

    //חיבור וניתוק מהסטור
    const { currentUser, logoutUser } = useContext(MyContext);

    //יצירת משתנה לפונקציית הניתוב בין הדפים
    const navigate = useNavigate();

    return (
        <nav className='navv'>
            <div className='navv-inner'></div>
            {currentUser ? (
                <div>
                    <span>שלום, {currentUser.userName} 👋</span>
                    <button onClick={logoutUser}>התנתק</button>
                </div>
            ) : (
                <span>ברוך הבא, אורח</span>
            )}
            <Link to="HomePage" className={({ isActive }) => isActive ? 'active' : ''}>דף הבית</Link>
            <Link to="About">אודות </Link>
            <Link to="BABIES">BABIES </Link>
            <Link to="BOYS">BOYS </Link>
            <Link to="Products">מוצרים </Link>
            <Link to="Cart">עגלה </Link>
            <Link to="purchase">רכישה</Link>
            <Link to="Login">התחבר </Link>
            <Link to="Contact">יצירת קשר </Link>


        </nav>

    )
}

export default Navbar


//שלבים בהעברת מידע מהורה לילד
//1. שליחת התוכן מקומפוננטת ההורה-----------------
//יצירת מערך המוצרים (לדוג) בהורה
//שולחת את המערך לילד דרך קריאה לילד בשמו, אייטמס = {מערך המוצרים}
//2. קבלת התוכן בקומפוננטת הילד
//יצירת פונקציה שמקבלת ({אייטמס)} ומחזירה לדוג
//אנאורדר-ליסט  {אייטס.מאפ}(P)=<
//{items.map((p) => (,pry<li key={p.id}>{p.name}</li>



