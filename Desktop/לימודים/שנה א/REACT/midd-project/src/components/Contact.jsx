import React from 'react'

const Contact = ({ contactWithUs, contactName, setContactName, contactEmail, setContactEmail, contactSubject, setContactSubject, contactBody, setContactBody }) => {

  return (
    <div className='contactPage'>
      <form>
        <input className='contactBtn' id='contactName' placeholder='שם' onChange={(e) => setContactName(e.target.value)} value={contactName} />
        <input className='contactBtn' id='contactEmail' placeholder='מייל' onChange={(e) => setContactEmail(e.target.value)} value={contactEmail} />
        <input className='contactBtn' id='contactSubject' placeholder='נושא ההודעה' onChange={(e) => setContactSubject(e.target.value)} value={contactSubject} />
        <input className='contactBtn' id='contactContent' placeholder='גוף ההודעה' onChange={(e) => setContactBody(e.target.value)} value={contactBody} />
        <button type='button' onClick={() => contactWithUs({ name: contactName, email: contactEmail, subject: contactSubject, body: contactBody })
      }>שלח הודעה</button>
      </form>
    </div>
  )
}

export default Contact