import React, { useState } from 'react';
import MessageBox from './MessageBox';


const HomePage = () => {
    // הגדרת משתנים עבור כתובות ה-URL של התמונות
    const heroImageUrl = '/images/newCollection.jpg'; // URL לתמונת ה-Hero
    const collectionSetsUrl = '/images/newCollection.jpg'; // URL לסטים
    const collectionEverydayUrl = '/images/newCollection.jpg'; // URL ליומיום אלגנטי
    const collectionAccessoriesUrl = '/images/newCollection.jpg'; // URL לאביזרים
    const giftBoxUrl = '/images/newCollection.jpg'; // URL למארז מתנה


    // מצבי סטייט לטופס צור קשר
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault(); // מונע ריענון דף
        console.log('פרטי יצירת קשר:', { contactName, contactEmail, contactMessage });
        alert('הודעתך נשלחה בהצלחה! ניצור קשר בהקדם.');
        setContactName('');
        setContactEmail('');
        setContactMessage('');
    };

    return (
        <div className="home-page">
            {/* 1. Hero Section */}
            {/* שימוש ב-heroImageUrl שהוגדר למעלה */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-content">
                    <h1 className="hero-title">MI BEBE: ממלכת התינוקות מתחילה כאן.</h1>
                    <p className="hero-subtitle">
                        ברוכים הבאים לעולם של איכות בלתי מתפשרת, אסתטיקה אלגנטית וקסם מלכותי,
                        <br />
                        היישר מספרד – לתינוק שלכם.
                    </p>
                    <a href="Products" className="btn primary-btn">
                        גלו את הקולקציה המלכותית <span className="crown-icon">👑</span>
                    </a>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className="philosophy-section section-padding">
                <div className="container">
                    <h2 className="section-title">הפילוסופיה המלכותית שלנו</h2>
                    <p className="philosophy-text">
                        ב-MI BEBE, אנו מאמינים כי כל תינוק ראוי למגע של מלכות.
                        אנו אוצרים באהבה ובקפידה כל פריט, מיוצר בספרד תוך שמירה על סטנדרטים מחמירים ביותר.
                        התוצאה: בגדים ואביזרים המשלבים יוקרה שקטה, רוך אינסופי וניחוח אירופאי ייחודי.
                    </p>
                </div>
            </section>

            {/* 3. Featured Collections Section */}
            <section id="featured-collections" className="featured-collections section-padding">
                <div className="container">
                    <h2 className="section-title">הקולקציה המלכותית</h2>
                    <div className="collections-grid">
                        <div className="collection-item">
                            {/* שימוש ב-collectionSetsUrl שהוגדר למעלה */}
                            <img src={collectionSetsUrl} alt="סטים לטקס הברית/ה" className="collection-image" />
                            <h3 className="collection-title">סטים לטקס הברית/ה</h3>
                            <p className="collection-description">
                                עיצובים מושלמים לרגעים החשובים ביותר, ברוך ובסטייל.
                            </p>
                        </div>
                        <div className="collection-item">
                            {/* שימוש ב-collectionEverydayUrl שהוגדר למעלה */}
                            <img src={collectionEverydayUrl} alt="יומיום אלגנטי" className="collection-image" />
                            <h3 className="collection-title">יומיום אלגנטי</h3>
                            <p className="collection-description">
                                נוחות מלכותית לכל יום, עם טאץ' אירופאי שיקי.
                            </p>
                        </div>
                        <div className="collection-item">
                            {/* שימוש ב-collectionAccessoriesUrl שהוגדר למעלה */}
                            <img src={collectionAccessoriesUrl} alt="אביזרים מנצנצים" className="collection-image" />
                            <h3 className="collection-title">אביזרים מנצנצים</h3>
                            <p className="collection-description">
                                השלימו את המראה המלכותי עם אביזרי שיער, תיקים ונעליים.
                            </p>
                        </div>
                    </div>
                    <a href="/Products" className="btn secondary-btn">
                        צפו בכל הקולקציה
                    </a>
                </div>
            </section>

            {/* 4. Testimonials Section */}
            <section className="testimonials-section section-padding">
                <div className="container">
                    <h2 className="section-title">קולקציית שבחים: המלצות מלקוחותינו</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-item">
                            <p className="testimonial-text">
                                "בגדי MI BEBE פשוט מרהיבים! האיכות מדהימה והתינוקת שלי נראית כמו נסיכה אמיתית. תודה על השירות המופלא!"
                            </p>
                            <p className="testimonial-author">- מיכל לוי</p>
                        </div>
                        <div className="testimonial-item">
                            <p className="testimonial-text">
                                "חיפשתי משהו מיוחד לטקס הברית, וב-MI BEBE מצאתי בדיוק את מה שרציתי. יוקרתי, נוח ומחמיא."
                            </p>
                            <p className="testimonial-author">- דנה כהן</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Gift Section */}
            <section className="gift-section section-padding">
                <div className="container gift-content-wrapper">
                    <div className="gift-text-content">
                        <h2 className="section-title">המתנה המושלמת לתינוק המלכותי</h2>
                        <p className="gift-description">
                            הפתיעו את יקיריכם במארז יוקרתי מבית MI BEBE, עם פריטים נבחרים שיגרמו לכל תינוק להרגיש נסיך או נסיכה.
                            מתנה בלתי נשכחת שמגיעה ארוזה באלגנטיות.
                        </p>
                        <a href="/Products" className="btn primary-btn">
                            הרכיבו מארז מתנה ייחודי
                        </a>
                    </div>
                    <div className="gift-image-wrapper">
                        {/* שימוש ב-giftBoxUrl שהוגדר למעלה */}
                        <img src={giftBoxUrl} alt="מארז מתנה יוקרתי" className="gift-image" />
                    </div>
                </div>
            </section>

            {/* 6. Contact Section (Simple form for home page) */}
            <section className="contact-section section-padding">
                <div className="container">
                    <h2 className="section-title">למגע אישי</h2>
                    <p className="contact-intro">
                        אנו זמינים לכל שאלה, ייעוץ או בקשה מיוחדת. צרו איתנו קשר ונשמח לעמוד לשירותכם.
                    </p>
                    <form onSubmit={handleContactSubmit} className="contact-form">
                        <input
                            type="text"
                            placeholder="שם מלא"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="כתובת מייל"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="ההודעה שלך..."
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            rows="5"
                            required
                        ></textarea>
                        <button type="submit" className="btn submit-btn">
                            שלח הודעה
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer - Assuming it's a separate component or styled externally */}
            {/* לדוגמה: <Footer /> */}
            <footer className="main-footer">
                <div className="container footer-content">
                    <div className="footer-logo">
                        <h3>MI BEBE</h3>
                        <p>ממלכת התינוקות מתחילה כאן.</p>
                    </div>
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="/about">אודותינו</a></li>
                            <li><a href="/products">חנות</a></li>
                            <li><a href="/contact">שאלות נפוצות</a></li>
                            <li><a href="/contact">צרו קשר</a></li>
                            <li><a href="/privacy">מדיניות פרטיות</a></li>
                        </ul>
                    </nav>
                    <div className="social-media">
                        <a href="https://instagram.com/mibebe" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> {/* אייקון אינסטגרם */}
                        </a>
                        <a href="https://facebook.com/mibebe" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i> {/* אייקון פייסבוק */}
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MI BEBE. כל הזכויות שמורות.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;