// components/MessageBox.js
import React from 'react';

// רכיב MessageBox מציג הודעה צפה למשתמש.
// הוא מקבל הודעה (message) ופונקציית סגירה (onClose).
const MessageBox = ({ message, onClose }) => {
  // אם אין הודעה, הרכיב לא מוצג.
  if (!message) return null;

  return (
    // שכבת רקע כהה שחוסמת אינטראקציה עם שאר הדף
    <div className="message-box-overlay">
      {/* תיבת ההודעה עצמה */}
      <div className="message-box-content">
        {/* טקסט ההודעה */}
        <p className="text-lg font-semibold mb-4">{message}</p>
        {/* כפתור לסגירת ההודעה */}
        <button
          onClick={onClose}
          className="message-box-button"
        >
          אישור
        </button>
      </div>
    </div>
  );
};

export default MessageBox;

























// // components/MessageBox.js
// import React from 'react';

// // רכיב MessageBox מציג הודעה צפה למשתמש.
// // הוא מקבל הודעה (message) ופונקציית סגירה (onClose).
// const MessageBox = ({ message, onClose }) => {
//   // אם אין הודעה, הרכיב לא מוצג.
//   if (!message) return null;

//   return (
//     // שכבת רקע כהה שחוסמת אינטראקציה עם שאר הדף
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       {/* תיבת ההודעה עצמה */}
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
//         {/* טקסט ההודעה */}
//         <p className="text-lg font-semibold mb-4">{message}</p>
//         {/* כפתור לסגירת ההודעה */}
//         <button
//           onClick={onClose}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
//         >
//           אישור
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MessageBox;
