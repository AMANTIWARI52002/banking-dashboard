'use client'

import React, { useState } from 'react'
import styles from '../styles/Settings.module.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('editProfile')
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    password: '',
    dateOfBirth: '1990-01-01',
    presentAddress: '123 Main St',
    permanentAddress: '456 Oak Ave',
    city: 'New York',
    postalCode: '10001',
    country: 'USA',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement save logic here
    console.log('Profile data saved:', profileData)
  }

  return (
    <div className={styles.settings}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'editProfile' ? styles.active : ''}
          onClick={() => setActiveTab('editProfile')}
        >
          Edit Profile
        </button>
        <button
          className={activeTab === 'preference' ? styles.active : ''}
          onClick={() => setActiveTab('preference')}
        >
          Preference
        </button>
        <button
          className={activeTab === 'security' ? styles.active : ''}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
      </div>

      {activeTab === 'editProfile' && (
        <form onSubmit={handleSave} className={styles.editProfileForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="presentAddress">Present Address</label>
            <input
              type="text"
              id="presentAddress"
              name="presentAddress"
              value={profileData.presentAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="permanentAddress">Permanent Address</label>
            <input
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={profileData.permanentAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={profileData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={profileData.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className={styles.saveButton}>Save</button>
        </form>
      )}

      {activeTab === 'preference' && (
        <div className={styles.preferenceTab}>
          <h2>Preferences</h2>
          <p>Preference settings coming soon...</p>
        </div>
      )}

      {activeTab === 'security' && (
        <div className={styles.securityTab}>
          <h2>Security</h2>
          <p>Security settings coming soon...</p>
        </div>
      )}
    </div>
  )
}

export default Settings

