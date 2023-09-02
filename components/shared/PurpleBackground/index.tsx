import React from 'react'
import styles from '@/styles/Background.module.css'

interface PurpleBackgroundProps {
  children: React.ReactNode;
}

const PurpleBackground: React.FC<PurpleBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      { children }
    </div>
  )
}

export default PurpleBackground;