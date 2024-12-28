import React, { useState } from 'react'
import styles from '../styles/QuickTransfer.module.css'

const QuickTransfer = () => {
  const [amount, setAmount] = useState('')

  const contacts = [
    { id: 1, name: 'Alice', role: 'Friend' },
    { id: 2, name: 'Bob', role: 'Family' },
    { id: 3, name: 'Charlie', role: 'Colleague' },
  ]

  const handleTransfer = () => {
    // Implement transfer logic here
    console.log('Transfer initiated')
  }

  return (
    <div className={styles.quickTransfer}>
      <h2>Quick Transfer</h2>
      <div className={styles.contactList}>
        {contacts.map((contact) => (
          <div key={contact.id} className={styles.contact}>
            <div className={styles.contactAvatar}>{contact.name[0]}</div>
            <div className={styles.contactInfo}>
              <div>{contact.name}</div>
              <div>{contact.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.transferForm}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handleTransfer}>Send</button>
      </div>
    </div>
  )
}

export default QuickTransfer

