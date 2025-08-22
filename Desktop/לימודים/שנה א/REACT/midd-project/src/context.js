

// MyContext.js
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { userName: "admin", userEmail: "admin@example.com", userPassword: "1234" }
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  // מצב חדש לניהול הודעות שיוצגו ב-MessageBox
  const [message, setMessage] = useState(null);

  // טעינת המשתמש הנוכחי מ-localStorage בעת טעינת הרכיב
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // פונקציה להצגת הודעה ב-MessageBox
  const showMessage = (msg) => {
    setMessage(msg);
  };

  // פונקציה לניקוי ההודעה וסגירת ה-MessageBox
  const clearMessage = () => {
    setMessage(null);
  };

  // פונקציית התחברות משתמש
  const loginUser = (User) => {
    const existUser = users.find(
      u => u.userName === User.userName && u.userPassword === User.userPassword
    );
    if (existUser) {
      setCurrentUser(existUser);
      localStorage.setItem("currentUser", JSON.stringify(existUser));
      // שימוש ב-showMessage במקום alert
      showMessage("התחברת בהצלחה! שלום לך ✅" + existUser.userName);
      return true; // מחזיר הצלחה
    } else {
      // שימוש ב-showMessage במקום alert
      showMessage("שם משתמש או סיסמה שגויים, 🔐 אנא נסה שוב!❌");
      return false; // מחזיר כישלון
    }
  };

  // פונקציית הרשמת משתמש
  const registerUser = (User) => {
    const existUser = users.find(u => u.userName === User.userName);
    if (existUser) {
      // שימוש ב-showMessage במקום alert
      showMessage("שגיאה, משתמש כבר רשום במערכת");
      return false;
    } else {
      setUsers(prev => [...prev, User]);
      setCurrentUser(User);
      localStorage.setItem("currentUser", JSON.stringify(User));
      // שימוש ב-showMessage במקום alert
      showMessage("🔐 הרשמתך למערכת נקלטה בהצלחה!");
      return true;
    }
  };

  // פונקציית ניתוק משתמש
  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    // שימוש ב-showMessage במקום alert
    showMessage("התנתקת מהמערכת. נתראה בפעם הבאה!");
  };

  // האובייקט שמכיל את כל הערכים והפונקציות שיהיו זמינים לכל הרכיבים שמשתמשים ב-Context
  const store = {
    users,
    currentUser,
    loginUser,
    registerUser,
    logoutUser,
    message,       // חשיפת מצב ההודעה
    showMessage,   // חשיפת פונקציית הצגת ההודעה
    clearMessage   // חשיפת פונקציית ניקוי ההודעה
  };

  return (
    <MyContext.Provider value={store}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;













// import React, { createContext, useState, useEffect } from 'react';

// const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     { userName: "admin", userEmail: "admin@example.com", userPassword: "1234" }
//   ]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("currentUser");
//     if (savedUser) {
//       setCurrentUser(JSON.parse(savedUser));
//     }
//   }, []);


//   const loginUser = (User) => {
//     const existUser = users.find(
//       u => u.userName === User.userName && u.userPassword === User.userPassword
//     );
//     if (existUser) {
//       setCurrentUser(existUser);
//       localStorage.setItem("currentUser", JSON.stringify(existUser));
//       alert("התחברת בהצלחה! שלום לך ✅" + existUser.userName);
//       return true; // ✅ מחזיר הצלחה
//     } else {
//       alert("שם משתמש או סיסמה שגויים, 🔐 אנא נסה שוב!❌");
//       return false; // ❌ מחזיר כישלון
//     }
//   };

//   const registerUser = (User) => {
//     const existUser = users.find(u => u.userName === User.userName);
//     if (existUser) {
//       alert("שגיאה, משתמש כבר רשום במערכת");
//       return false;
//     } else {
//       const newUser = { ...User, userEmail: "" }; // אם אין מייל, הוסיפי שדה ריק
//       setCurrentUser(newUser);
//       localStorage.setItem("currentUser", JSON.stringify(newUser));
//       setUsers(prev => [...prev, User]);
//       alert("🔐 הרשמתך למערכת נקלטה בהצלחה!");
//       return true;
//     }
//   };


//   //פונקציית ניתוק משתמש
//   const logoutUser = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//     alert("התנתקת מהמערכת. נתראה בפעם הבאה!");
//   };

//   const store = {
//     users,
//     currentUser,
//     loginUser,
//     registerUser,
//     logoutUser
//   };
//   return (
//     <MyContext.Provider value={store}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export default MyContext;



{/* 
src/
├── App.jsx
├── context.js          ← כאן כל המשתמשים והפונקציות
├── components/
│   ├── Navbar.jsx      ← כאן מוצג שם המשתמש וכפתור יציאה
│   ├── Login.jsx       ← כאן את מתחברת
│   └── HomePage.jsx    ← דף הבית שלך

*/}