import React from 'react'
import styles from './preview.css'

export function Preview() {
  return (
    <div className={styles.preview}>
        <img
        className={styles.previewImg}
        src="https://i.pinimg.com/originals/e3/76/a7/e376a7f0d7ee2efe7e822e72565e5597.jpg"
        alt=""/>
    </div>
  )
}