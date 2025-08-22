import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
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
import { useState, useEffect, useContext } from 'react';
import MyContext from './context';
import MessageBox from './components/MessageBox'; // ייבוא רכיב MessageBox


function App() {

  //משתנים======================================================

  // גישה ל-currentUser, showMessage, clearMessage, ו-message מה-Context
  const { currentUser, showMessage, clearMessage, message } = useContext(MyContext);


  // משתנה שקובע אם המשתמש הנוכחי הוא מנהל
  const [isAdmin, setIsAdmin] = useState(false);
  

  //יצירת משתנה לפונקציית הניתוב בין הדפים
  const navigate = useNavigate();

  //מערכים מוצרים
  //מערך מוצרים תינוקות
  const babiesArr = [
    { id: 1, quantity: 1, name: "FANTASY BABYGROW – BEIGE", price: 169.00, code: 211691, img: "FANTASY BABYGROW BEIGE.png" },
    { id: 2, quantity: 1, name: "CLOUDS BABY COTTON SET – WHITE", price: 153.00, code: 211692, img: "CLOUDS BABY COTTON SET WHITE.png" },
    { id: 3, quantity: 1, name: "MIBEBE SIGNATURE – BABYGROW", price: 169.00, code: 211693, img: "MIBEBE SIGNATURE – BABYGROW.png" },
    { id: 4, quantity: 1, name: "Lee set – Sand", price: 199.00, code: 211694, img: "Lee  set  Sand.png" },
    { id: 5, quantity: 1, name: "Lee set – Pink", price: 199.00, code: 211695, img: "Lee  set  Pink.png" },
    { id: 6, quantity: 1, name: "סט בונבון – שמנת", price: 269.00, code: 211696, img: "set bonbon bei.png" }
  ]
  //מערך מוצרים בנים
  const boysArr = [
    { id: 7, quantity: 1, name: "COTTON BOY ROMPER – CAMEL", price: 199.00, code: 211697, img: "COTTON BOY ROMPER CAMEL.png" },
    { id: 8, quantity: 1, name: "PINOCHO ROMPER", price: 179.00, code: 211698, img: "PINOCHO ROMPER.png" },
    { id: 9, quantity: 1, name: "BODYSUIT – CREAM MARINE", price: 139.00, code: 211699, img: "BODYSUIT CREAM MARINE.png" },
    { id: 10, quantity: 1, name: "JULIAN EXCLUSIVE BABY BOY SET", price: 449.00, code: 2116910, img: "JULIAN EXCLUSIVE BABY BOY SET.png" },
    { id: 11, quantity: 1, name: "MICHAEL BABY SET", price: 299.00, code: 2116911, img: "MICHAEL BABY SET.png" },
    { id: 12, quantity: 1, name: "RAUL BABY SET", price: 329.00, code: 2116912, img: "RAUL BABY SET.png" }
  ]

  //מערך מוצירם כולל
  const allProducts = [...babiesArr, ...boysArr]

  //מערך מסונן שאותו נציג בחיפוש
  const [filteredProduct, setFilteredProduct] = useState([]);

  //משתנה שיכיל את ערך החיפוש
  const [searchVal, setSearchVal] = useState("");

  //יצירת מערך מוצרים לעגלה
  const [cartArr, setCartArr] = useState([]);

  // יצירת משתנה לסכום כולל
  const [sumOfCart, setSumOfCart] = useState(0);
  const [sum, setSum] = useState(0);


  //יצירת מערך משתמשים
  const [users, setUsers] = useState([
    { userName: "", userEmail: "", userPassword: "" }
  ])
   //משתנה לבדיקה אם המוצר הנוכחי קיים כבר בעגלה או לא
   let existProduct
//===================================================================================אפשר למחוק את זה

 

  //משתנים שיכיל את ערך יצירת קשר
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactBody, setContactBody] = useState("");



  //פונקציות=============================================================

  //פונקציית חיפוש
  const search = (txt) => {
    setSearchVal(txt);
    const filteredArr = allProducts.filter(p => p.name.includes(txt) || p.price.toString().includes(txt));
    setFilteredProduct(filteredArr);
  }

   // פונקציה לטיפול במחיקת מוצר
   const handleDeleteProduct = (productId) => {
    allProducts(allProducts.filter(product => product.id !== productId));
    message(`המוצר עם ID ${productId} נמחק.`);
  };

  
  // פונקציה לטיפול בהוספת מוצר חדש
  const handleAddProduct = () => {
    const newProduct = {
      id: allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id)) + 1 : 1,
      name: `מוצר חדש ${allProducts.length + 1}`,
      price: Math.floor(Math.random() * 200) + 50
    };
    allProducts([...allProducts, newProduct]);
    alert(`המוצר ${newProduct.name} נוסף.`);
  };


  //פונקציית יצירת קשר
  const contactWithUs = ({ name, email, subject, body }) => {

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(contactEmail)) {
      showMessage("כתובת המייל אינה תקינה."); // שימוש ב-showMessage
      return;
    }

    if (!name || !email || !subject || !body) {
      showMessage("אנא מלאי את כל השדות לפני שליחת ההודעה."); // שימוש ב-showMessage
      return;
    }



    showMessage("פנייתך התקבלה! אנו מטפלים בה ותיענה עד יום העסקים הבא🥰"); // שימוש ב-showMessage
    setContactName("");
    setContactEmail("");
    setContactSubject("");
    setContactBody("");
  };

  //מעביר לדף פרטי המוצר
  const detailedPrduct = (product) => {
    navigate('/SingleProduct', { state: { product } });
  }
  //פונקציית קניה-
  // הוספת המוצר למערך העגלה וקריאה לפונקציה לסכום הכולל
  const Buy = (product) => {

    showMessage('הוספת לעגלה את: ' + (product?.name || "no name"));
    //בדיקה - אם המוצר קיים בעגלה - הוספה בכמות
    const existProduct = cartArr.find(p => p.code === product.code)
    //המוצר קיים בעגלה
    if (existProduct) {
      setCartArr(prev => prev.map(p => p.code === product.code ? { ...p, quantity: p.quantity + 1 } : p));
      //אם המוצר לא קיים בעגלה - הוספתו למקום שאחרי האחרון בעגלה
    } else {
      setCartArr(prev => [...prev, { ...product, quantity: 1 }]);
    }

    totalSum(product)
  }

  //פונקצייה להוספה לסכום הכולל
  const totalSum = (product) => {
    setSumOfCart(previous => previous + product.price * product.quantity)
  }
  useEffect(() => {
    if (sumOfCart > 0) {
    }
  }, [sumOfCart]);

  //מחיקת מוצר מהעגלה
  const deleteFromCart = (product) => {
    setCartArr(cartArr => cartArr.filter(p => p.code !== product.code))
    totalSumMinus(product)
  }

  //פונקצייה להסרה מהסכום הכולל לאחר הסרת מוצר להעגלה
  const totalSumMinus = (product) => {
    setSumOfCart(previous => previous - (product.price * product.quantity))
  }

  //פונקציית רכישה ואיפוס העגלה
  const purchasing = () => {
    // alert("currentUser:", currentUser);
    if (!currentUser || !currentUser.userName) {
      showMessage("יש להתחבר או להירשם כדי לבצע רכישה 🛒");
      return;
    }
   if (currentUser && currentUser.userName) {
    showMessage(" 🤎 ")
    showMessage("הזמנתך התקבלה 🤎 חשבונית נשלחה למייל המשתמש שלך!")
      setCartArr([]);
      setSum(0);
      setSumOfCart(0);
    }
  }


  const cartSumCalc = () => {
    const total = cartArr.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSum(total);
  };


  //פונקציה להוספת כמות לעגלה
  function plus(code) {
    setCartArr(prev => prev.map(p => p.code === code ? { ...p, quantity: p.quantity + 1 } : p));
  }

  useEffect(() => {
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
  }, [cartArr]);


  //פונקציה להפחתת כמות מהעגלה
  function minus(code) {
    setCartArr(prev => prev.map(p => p.code === code ? { ...p, quantity: p.quantity - 1 } : p).filter(p => p.quantity > 0));
  }
  useEffect(() => {
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
  }, [cartArr]);




  return (
    
      <div className="App">
        <header className="App-header">
          <h1>MI BEBE  </h1>
          <Navbar />
          <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            <Route path='/about' element={<About contactWithUs={contactWithUs} contactName={contactName} setContactName={setContactName} contactEmail={contactEmail} setContactEmail={setContactEmail} contactSubject={contactSubject} setContactSubject={setContactSubject} contactBody={contactBody} setContactBody={setContactBody} />} />
            <Route path='/BABIES' element={<Babies allProducts={babiesArr} Buy={Buy} detailedPrduct={detailedPrduct} />} />
            <Route path='BOYS' element={<Boys allProducts={boysArr} Buy={Buy} detailedPrduct={detailedPrduct} />} />
            <Route path='/cart' element={<Cart cartArr={cartArr} plus={plus} minus={minus} detailedPrduct={detailedPrduct} deleteFromCart={deleteFromCart} />} />
            <Route path='/purchase' element={<Purchase sum={sum} currentUser={currentUser} cartSumCalc={cartSumCalc} cartSum={sumOfCart} cartArr={cartArr} purchasing={purchasing} />} />
            <Route path='/contact' element={<Contact contactWithUs={contactWithUs} contactName={contactName} setContactName={setContactName} contactEmail={contactEmail} setContactEmail={setContactEmail} contactSubject={contactSubject} setContactSubject={setContactSubject} contactBody={contactBody} setContactBody={setContactBody} />} />
            <Route path='HomePage' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products allProducts={allProducts} Buy={Buy} detailedPrduct={detailedPrduct} search={search} searchVal={searchVal} filteredProduct={filteredProduct} />} />
            <Route path='/SingleProduct' element={<SingleProduct Buy={Buy} />} />
            {/* <Route path='*' element={<div><h1>404 Not Found</h1></div>} /> */}
          </Routes>
        </header>
              {/* הצגת ה-MessageBox */}
      <MessageBox message={message} onClose={clearMessage} />
      </div>
  );
}

export default App;


//מערך משתמשים בלוקאל 
//שולפת בודקת
// מערך יוזרים מסוג יוזסטייט
// רק משתמש נוכחי שומרת בלוקאל 
//אפשר כפרופס
