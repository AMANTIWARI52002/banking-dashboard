'use client'

import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import styles from '../styles/WeeklyActivityChart.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deposits',
        data: [300, 450, 200, 600, 400, 300, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Withdrawals',
        data: [200, 300, 400, 300, 500, 200, 400],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  return (
    <div className={styles.weeklyActivityChart}>
      <h2>Weekly Activity</h2>
      <Bar data={data} options={options} />
    </div>
  )
}

export default WeeklyActivityChart

