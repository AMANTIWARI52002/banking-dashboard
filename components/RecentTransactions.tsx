import React from 'react'
import styles from '../styles/RecentTransactions.module.css'

const RecentTransactions = () => {
  const transactions = [
    { id: 1, description: 'Grocery Store', date: '2023-05-01', amount: -50 },
    { id: 2, description: 'Salary Deposit', date: '2023-05-02', amount: 2000 },
    { id: 3, description: 'Restaurant Bill', date: '2023-05-03', amount: -75 },
  ]

  return (
    <div className={styles.recentTransactions}>
      <h2>Recent Transactions</h2>
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={styles.transactionItem}>
            <div className={styles.transactionIcon}>
              {transaction.amount > 0 ? '+' : '-'}
            </div>
            <div className={styles.transactionDetails}>
              <div>{transaction.description}</div>
              <div>{transaction.date}</div>
            </div>
            <div className={styles.transactionAmount}>
              ${Math.abs(transaction.amount)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentTransactions

