import React from 'react'
import styles from '../styles/MyCards.module.css'

const MyCards = () => {
  const cards = [
    { id: 1, balance: 5000, name: 'John Doe', number: '**** **** **** 1234' },
    { id: 2, balance: 3000, name: 'John Doe', number: '**** **** **** 5678' },
  ]

  return (
    <div className={styles.myCards}>
      <h2>My Cards</h2>
      <div className={styles.cardList}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardBalance}>${card.balance}</div>
            <div className={styles.cardDetails}>
              <div>{card.name}</div>
              <div>{card.number}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.seeAllButton}>See All</button>
    </div>
  )
}

export default MyCards

