'use client'

import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import styles from '../styles/ExpenseStatistics.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const ExpenseStatistics = () => {
  const data = {
    labels: ['Entertainment', 'Bill Expenses', 'Investments', 'Others'],
    datasets: [
      {
        data: [300, 500, 200, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  }

  const options = {
    responsive: true,
  }

  return (
    <div className={styles.expenseStatistics}>
      <h2>Expense Statistics</h2>
      <Pie data={data} options={options} />
    </div>
  )
}

export default ExpenseStatistics

