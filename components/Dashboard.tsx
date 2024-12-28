import React from 'react'
import MyCards from './MyCards'
import RecentTransactions from './RecentTransactions'
import WeeklyActivityChart from './WeeklyActivityChart'
import ExpenseStatistics from './ExpenseStatistics'
import QuickTransfer from './QuickTransfer'
import BalanceHistoryChart from './BalanceHistoryChart'
import styles from '../styles/Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topSection}>
        <MyCards />
        <RecentTransactions />
      </div>
      <div className={styles.middleSection}>
        <WeeklyActivityChart />
        <ExpenseStatistics />
      </div>
      <div className={styles.bottomSection}>
        <QuickTransfer />
        <BalanceHistoryChart />
      </div>
    </div>
  )
}

export default Dashboard

