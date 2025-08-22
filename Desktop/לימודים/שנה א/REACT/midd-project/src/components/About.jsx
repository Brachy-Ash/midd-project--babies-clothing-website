import React from 'react'

const About = ({ contactWithUs, contactName, setContactName, contactEmail, setContactEmail, contactSubject, setContactSubject, contactBody, setContactBody }) => {
    return (
        <div className='aboutContainer'>
            <div className="aboutContainer">
                <div className="aboutContent">
                    <h2> MI BEBE – מלכות התינוקות מתחילה כאן</h2>
                    <p className='aboutDiv'>
                        ברוכים הבאים לעולמה המופלא של  MI BEBE – חנות בוטיק
                        <br></br>
                        לתינוקות המוקדשת לאסתטיקה אלגנטית, איכות בלתי מתפשרת וקסם מלכותי.
                    </p>
                    <p className='aboutDiv'>
                        כל פריט בקולקציה שלנו נבחר בקפידה, מיוצר באהבה בספרד תוך
                        <br></br>
                        שמירה על סטנדרטים מחמירים, ומעוצב ברוח אלגנטית ועדינה – בגוונים
                        <br></br>
                        הרמוניים של בז', חום ופלטת צבעים רכה המשרה תחושת יוקרה שקטה.
                    </p>
                    <p className='aboutDiv'>
                        תמצאו אצלנו: סטים לברית, בגדי תינוקות וילדים (בנים ובנות),
                        <br></br>
                        גרביים, גרביונים, נעליים, אקססוריז לשיער, תיקי עגלה, ועוד – כולם נושאים
                        <br></br>
                        את חותם המותג: ייחודיות אלגנטית עם קריצה אופנתית מעודנת.
                    </p>
                    <p className='aboutDiv'>
                        MI BEBE לא רק מלבישה – היא מעניקה חוויית לבוש
                        <br></br>
                        שכולה ניחוח אירופאי, רוך, וממלכתיות של ממש
                    </p>
                    <form>
                        <input className='contactBtn' id='contactName' placeholder='שם' onChange={(e) => setContactName(e.target.value)} value={contactName} />
                        <input className='contactBtn' id='contactEmail' placeholder='מייל' onChange={(e) => setContactEmail(e.target.value)} value={contactEmail} />
                        <input className='contactBtn' id='contactSubject' placeholder='נושא ההודעה' onChange={(e) => setContactSubject(e.target.value)} value={contactSubject} />
                        <input className='contactBtn' id='contactContent' placeholder='גוף ההודעה' onChange={(e) => setContactBody(e.target.value)} value={contactBody} />
                        <button type='button' onClick={() => contactWithUs({ name: contactName, email: contactEmail, subject: contactSubject, body: contactBody })
                        }>שלח הודעה</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default About