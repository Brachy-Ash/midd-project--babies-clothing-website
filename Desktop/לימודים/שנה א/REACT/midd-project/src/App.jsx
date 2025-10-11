import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
// ייבוא קומפוננטות
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Products from './components/Products';
import Babies from './components/Babies';
import Boys from './components/Boys';
import SingleProduct from './components/SingleProduct';
import Purchase from './components/purchase';
import MessageBox from './components/MessageBox'; // ייבוא רכיב MessageBox

// הוסר: import MyContext from './context'; // אם לא משתמשים ב-Context Provider כאן
// הוסר: import { useContext } from 'react'; // כי הסרנו את הקריאה ל-useContext

function App() {

  // משתנים גלובליים ו-State ======================================

  // הוסר: const { showMessage, clearMessage, message } = useContext(MyContext); // <-- זו השגיאה!

  // משתנה שקובע אם המשתמש הנוכחי הוא מנהל
  const [isAdmin, setIsAdmin] = useState(false);
  
  // הגדרת מצב המשתמש המחובר (לוגיקת כניסה/ניתוק)
  const [currentUser, setCurrentUser] = useState(null); 

  // מצב עבור הודעות למשתמש (MessageBox)
  const [message, setMessage] = useState(''); 

  // פונקציה להצגת הודעה
  const showMessage = (msg) => setMessage(msg);

  // פונקציה לניקוי הודעה (מועברת ל-MessageBox)
  const clearMessage = () => setMessage(''); 


  //יצירת משתנה לפונקציית הניתוב בין הדפים
  const navigate = useNavigate();

  //מערכי מוצרים (השארתי את הקוד שלך כפי שהוא)
  const babiesArr = [
    { id: 1, quantity: 1, name: "FANTASY BABYGROW – BEIGE", price: 169.00, code: 211691, img: "FANTASY BABYGROW BEIGE.png" },
    { id: 2, quantity: 1, name: "CLOUDS BABY COTTON SET – WHITE", price: 153.00, code: 211692, img: "CLOUDS BABY COTTON SET WHITE.png" },
    { id: 3, quantity: 1, name: "MIBEBE SIGNATURE – BABYGROW", price: 169.00, code: 211693, img: "MIBEBE SIGNATURE – BABYGROW.png" },
    { id: 4, quantity: 1, name: "Lee set – Sand", price: 199.00, code: 211694, img: "Lee  set  Sand.png" },
    { id: 5, quantity: 1, name: "Lee set – Pink", price: 199.00, code: 211695, img: "Lee  set  Pink.png" },
    { id: 6, quantity: 1, name: "סט בונבון – שמנת", price: 269.00, code: 211696, img: "set bonbon bei.png" }
  ]
  
  const boysArr = [
    { id: 7, quantity: 1, name: "COTTON BOY ROMPER – CAMEL", price: 199.00, code: 211697, img: "COTTON BOY ROMPER CAMEL.png" },
    { id: 8, quantity: 1, name: "PINOCHO ROMPER", price: 179.00, code: 211698, img: "PINOCHO ROMPER.png" },
    { id: 9, quantity: 1, name: "BODYSUIT – CREAM MARINE", price: 139.00, code: 211699, img: "BODYSUIT CREAM MARINE.png" },
    { id: 10, quantity: 1, name: "JULIAN EXCLUSIVE BABY BOY SET", price: 449.00, code: 2116910, img: "JULIAN EXCLUSIVE BABY BOY SET.png" },
    { id: 11, quantity: 1, name: "MICHAEL BABY SET", price: 299.00, code: 2116911, img: "MICHAEL BABY SET.png" },
    { id: 12, quantity: 1, name: "RAUL BABY SET", price: 329.00, code: 2116912, img: "RAUL BABY SET.png" }
  ]

  // מערך מוצרים כולל (ממוזג)
  const [allProducts, setAllProducts] = useState ([...babiesArr, ...boysArr])

  // מערך מסונן שאותו נציג בחיפוש
  const [filteredProduct, setFilteredProduct] = useState([]);

  // משתנה שיכיל את ערך החיפוש
  const [searchVal, setSearchVal] = useState("");

  // יצירת מערך מוצרים לעגלה
  const [cartArr, setCartArr] = useState([]);

  // יצירת משתנה לסכום כולל
  const [sumOfCart, setSumOfCart] = useState(0);
  const [sum, setSum] = useState(0);

  // משתנים שיכיל את ערך יצירת קשר
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactBody, setContactBody] = useState("");


  // פונקציות =============================================================

  // פונקציית חיפוש
  const search = (txt) => {
    setSearchVal(txt);
    const filteredArr = allProducts.filter(p => p.name.includes(txt) || p.price.toString().includes(txt));
    setFilteredProduct(filteredArr);
  }

  // פונקציה לטיפול במחיקת מוצר
  const handleDeleteProduct = (productId) => {
    // 1. נמחק את המוצר מרשימת המוצרים המלאה
    const updatedAllProducts = allProducts.filter(product => product.id !== productId);
    setAllProducts(updatedAllProducts);
    // 2. נמחק את המוצר גם מרשימת המוצרים המסוננים
    const updatedFilteredProducts = filteredProduct.filter(product => product.id !== productId);
    setFilteredProduct(updatedFilteredProducts);
    showMessage(`המוצר עם ID ${productId} נמחק.`); // שימוש ב-showMessage
  };

  // פונקציה לטיפול בהוספת מוצר חדש
  const handleAddProduct = (newProductData) => {
    // שלב 1: יצירת מזהה (ID) ייחודי
    const newId = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id)) + 1 : 1;

    // שלב 2: יצירת URL זמני מהקובץ
    // הערה: נדרש שינוי לטיפול ב-URL.createObjectURL כשיש קובץ
    const imgUrl = newProductData.img ? newProductData.img : './images/placeholder.jpg'; 
    
    // שלב 3: יצירת אובייקט המוצר החדש עם ה-URL
    const newProduct = {
      id: newId,
      name: newProductData.name,
      price: newProductData.price,
      code: newProductData.code,
      img: imgUrl // שמירת ה-URL במקום הקובץ
    };

    // שלב 4: עדכון המצב (state) של המוצרים
    setAllProducts([...allProducts, newProduct]);
    setFilteredProduct([...filteredProduct, newProduct]);
    
    // הודעה למשתמש
    showMessage(`המוצר "${newProduct.name}" נוסף בהצלחה!`); // שימוש ב-showMessage
  };


  // פונקציית יצירת קשר
  const contactWithUs = () => { // הפונקציה לא קיבלה Props, היא עובדת עם ה-State

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(contactEmail)) {
      showMessage("כתובת המייל אינה תקינה."); 
      return;
    }

    if (!contactName || !contactEmail || !contactSubject || !contactBody) {
      showMessage("אנא מלאי את כל השדות לפני שליחת ההודעה."); 
      return;
    }


    showMessage("פנייתך התקבלה! אנו מטפלים בה ותיענה עד יום העסקים הבא🥰"); 
    setContactName("");
    setContactEmail("");
    setContactSubject("");
    setContactBody("");
  };

  // מעביר לדף פרטי המוצר
  const detailedPrduct = (product) => {
    navigate('/SingleProduct', { state: { product } });
  }

  // פונקציית קניה - הוספת המוצר למערך העגלה וקריאה לפונקציה לסכום הכולל
  const Buy = (product) => {

    showMessage('הוספת לעגלה את: ' + (product?.name || "מוצר לא ידוע"));
    
    const existProduct = cartArr.find(p => p.code === product.code)
    
    // המוצר קיים בעגלה
    if (existProduct) {
      setCartArr(prev => prev.map(p => p.code === product.code ? { ...p, quantity: p.quantity + 1 } : p));
    // אם המוצר לא קיים בעגלה - הוספתו
    } else {
      setCartArr(prev => [...prev, { ...product, quantity: 1 }]);
    }

    totalSum(product)
  }

  // פונקצייה להוספה לסכום הכולל
  const totalSum = (product) => {
    setSumOfCart(previous => previous + product.price) // הוסר * product.quantity מכיוון ש-quantity תמיד 1 ב"קנייה" הראשונית.
  }

  // מחיקת מוצר מהעגלה
  const deleteFromCart = (product) => {
    setCartArr(cartArr => cartArr.filter(p => p.code !== product.code))
    totalSumMinus(product)
  }

  // פונקצייה להסרה מהסכום הכולל לאחר הסרת מוצר להעגלה
  const totalSumMinus = (product) => {
    setSumOfCart(previous => previous - (product.price * product.quantity))
  }

  // פונקציית רכישה ואיפוס העגלה
  const purchasing = () => {
    if (!currentUser) {
      showMessage("יש להתחבר או להירשם כדי לבצע רכישה 🛒");
      return;
    }
    if (cartArr.length === 0) {
        showMessage("העגלה שלך ריקה! הוסף מוצרים לפני ביצוע רכישה.");
        return;
    }
    
    showMessage("הזמנתך התקבלה 🤎 חשבונית נשלחה למייל המשתמש שלך!");
    setCartArr([]);
    setSum(0);
    setSumOfCart(0);
  }


  const cartSumCalc = () => {
    const total = cartArr.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSum(total);
  };


  // פונקציה להוספת כמות לעגלה
  function plus(code) {
    setCartArr(prev => prev.map(p => p.code === code ? { ...p, quantity: p.quantity + 1 } : p));
    // יש לעדכן את סכום העגלה כאן גם כן (אם צריך)
  }

  useEffect(() => {
    // שמירת עגלה ב-localStorage - מומלץ להחליף ב-Firestore לשימוש אמיתי
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
    cartSumCalc(); // קורא לחישוב הסכום בכל פעם שהעגלה משתנה
  }, [cartArr]);


  // פונקציה להפחתת כמות מהעגלה
  function minus(code) {
    setCartArr(prev => prev.map(p => p.code === code ? { ...p, quantity: p.quantity - 1 } : p).filter(p => p.quantity > 0));
    // יש לעדכן את סכום העגלה כאן גם כן (אם צריך)
  }

  // הוסר: useEffect כפול שמורכב על [cartArr]


  return (
    
    <div className="App">
      <header className="App-header">
        <h1>MI BEBE</h1>
        {/* ודא ש-Navbar מיובא */}
        <Navbar />
        <Routes>
          <Route path='/about' element={<About contactWithUs={contactWithUs} contactName={contactName} setContactName={setContactName} contactEmail={contactEmail} setContactEmail={setContactEmail} contactSubject={contactSubject} setContactSubject={setContactSubject} contactBody={contactBody} setContactBody={setContactBody} />} />
          <Route path='/BABIES' element={<Babies allProducts={babiesArr} Buy={Buy} detailedPrduct={detailedPrduct} />} />
          <Route path='BOYS' element={<Boys allProducts={boysArr} Buy={Buy} detailedPrduct={detailedPrduct} />} />
          <Route path='/cart' element={<Cart cartArr={cartArr} plus={plus} minus={minus} detailedPrduct={detailedPrduct} deleteFromCart={deleteFromCart} />} />
          <Route path='/purchase' element={<Purchase sum={sum} currentUser={currentUser} cartSumCalc={cartSumCalc} cartSum={sumOfCart} cartArr={cartArr} purchasing={purchasing} />} />
          <Route path='/contact' element={<Contact contactWithUs={contactWithUs} contactName={contactName} setContactName={setContactName} contactEmail={contactEmail} setContactEmail={setContactEmail} contactSubject={contactSubject} setContactSubject={setContactSubject} contactBody={contactBody} setContactBody={setContactBody} />} />
          <Route path='HomePage' element={<HomePage />} />
          <Route 
            path='/login' 
            element={<Login 
              setIsAdmin={setIsAdmin} 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} 
            />} 
          />
          <Route path='/products' element={<Products allProducts={allProducts} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct} handleAddProduct={handleAddProduct} Buy={Buy} detailedPrduct={detailedPrduct} search={search} searchVal={searchVal} filteredProduct={filteredProduct} />} />
          <Route path='/SingleProduct' element={<SingleProduct Buy={Buy} />} />
          {/* <Route path='*' element={<div><h1>404 Not Found</h1></div>} /> */}
        </Routes>
      </header>
      
      {/* הצגת ה-MessageBox - משתמש במשתני State שהוגדרו ב-App */}
      <MessageBox message={message} onClose={clearMessage} />
    </div>
  );
}

export default App;
