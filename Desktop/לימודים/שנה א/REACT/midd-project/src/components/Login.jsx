import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// פונקציית עזר להצגת הודעות - השתמשו ב-MessageBox במקום alert
const MessageBox = (message) => {
  // המלצה: החליפי את alert בחלון מותאם אישית (Modal)
  alert(message);
};

// --- מאגר נתונים זמני: מערך המשתמשים הרשומים ---
// הערה: במציאות, נתונים אלו יגיעו מ-Firestore/Backend/API
const users = [
  { username: 'מנהל', email: 'admin@example.com', password: '0000', role: 'admin' },
  { username: 'manager', email: 'manager@example.com', password: '0000', role: 'admin' },
  { username: 'לקוח1', email: 'client1@example.com', password: '1234', role: 'customer' },
  { username: 'john', email: 'john@example.com', password: 'password', role: 'customer' },
];

// שינוי כאן: קבלת currentUser ו-setCurrentUser כ-Props מה-App
function Login({ isAdmin, setIsAdmin, currentUser, setCurrentUser }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // הוסר: const [currentUser, setCurrentUser] = useState(null); 
  const navigate = useNavigate();

  // פונקציית התחברות
  const handleLogin = () => {
    // דרישה 1: בדיקה אם כבר יש משתמש מחובר
    if (currentUser) {
      MessageBox("משתמש כבר מחובר. אנא התנתק לפני כניסה חדשה.");
      return;
    }

    // בדיקת קלט בסיסית
    if (!userName || !userPassword) {
      MessageBox("אנא מלא שם משתמש (או מייל) וסיסמה.");
      return;
    }

    // דרישה 3: מציאת המשתמש במערך
    // ניתן להתחבר לפי שם משתמש או מייל
    const userToLogin = users.find(
      user => (user.username === userName || user.email === userName) && user.password === userPassword
    );

    if (userToLogin) {
      // אם המשתמש רשום, מבצעים התחברות
      setCurrentUser(userToLogin); // שימוש ב-Setter שהתקבל מה-App
      setIsAdmin(userToLogin.role === 'admin'); // הגדרת הרשאת מנהל

      MessageBox(`התחברת בהצלחה כ${userToLogin.role === 'admin' ? 'מנהל' : 'לקוח'}!`);
      navigate('/homePage');
    } else {
      // אם המשתמש לא נמצא במערך
      MessageBox("פרטי התחברות שגויים. אם אינך רשום, אנא הרשם תחילה.");
    }
  };

  // פונקציית הרשמה
  const handleRegister = () => {
    // בדיקת קלט בסיסית
    if (!userName || !userEmail || !userPassword) {
      MessageBox("אנא מלא את כל השדות: שם משתמש, מייל וסיסמה.");
      return;
    }

    // דרישה 4: בדיקה אם שם המשתמש או המייל כבר תפוסים
    const isUserExists = users.some(user => user.username === userName || user.email === userEmail);
    if (isUserExists) {
      MessageBox("שם משתמש או מייל זה כבר תפוסים במערכת. בחר פרטים אחרים.");
      return;
    }

    // הוספת המשתמש למערך (שים לב: נתונים אלו לא נשמרים בזיכרון לאחר רענון דף)
    const newUser = { username: userName, email: userEmail, password: userPassword, role: 'customer' };
    users.push(newUser); 

    // התחברות אוטומטית לאחר רישום מוצלח
    setCurrentUser(newUser); // שימוש ב-Setter שהתקבל מה-App
    setIsAdmin(false);
    MessageBox("נרשמת והתחברת בהצלחה!");
    navigate('/homePage');
  };

  // פונקציית התנתקות
  const handleLogOut = () => {
    // דרישה 2: בדיקה אם יש משתמש מחובר
    if (!currentUser) {
      MessageBox("אין משתמש מחובר כרגע. הניתוק נכשל.");
      return;
    }

    // ניתוק המשתמש
    setCurrentUser(null); // איפוס המשתמש המחובר ב-App
    setIsAdmin(false);
    MessageBox("התנתקת בהצלחה מהמערכת");
    navigate('/homePage');
  };
 
  // פונקציית Submit גנרית שתטפל ב-Enter
  const handleSubmit = (e) => {
      e.preventDefault(); // מונע את טעינת הדף מחדש
      handleLogin(); // ברירת מחדל: לחיצה על Enter תבצע כניסה
  };


  return (
    <div className='loginPage'>
      <div className='logIn'>
        {/* שינוי: עטיפת הקלטים בתוך תגית <form> */}
        <form onSubmit={handleSubmit}> 
          {/* קלט שם משתמש: משמש גם לחיבור וגם לרישום */}
          <input placeholder="שם משתמש" onChange={e => setUserName(e.target.value)} />
          {/* קלט מייל: משמש לרישום ואופציונלי לחיבור */}
          <input placeholder="מייל (ברישום בלבד)" onChange={e => setUserEmail(e.target.value)} />
          <input placeholder="סיסמה" type="password" onChange={e => setUserPassword(e.target.value)} />
          
          {/* כפתורים */}
          {/* הוספנו type="button" לכפתורים שאינם submit כדי למנוע טריגר כפול */}
          <button type="submit" onClick={handleLogin}>התחבר</button>
          <button type="button" onClick={handleRegister}>הרשם</button>
          <button type="button" onClick={handleLogOut}>יציאת משתמש</button>
        </form>
        
        {/* הצגת מצב משתמש נוכחי - פונקציה מומלצת */}
        {currentUser && (
            <p className='current-user-status'>
                מחובר כרגע: **{currentUser.username}** ({currentUser.role === 'admin' ? 'מנהל' : 'לקוח'})
            </p>
        )}
      </div>
    </div>
  );
}

export default Login;
