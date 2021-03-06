import React from 'react'
import IconComment from '../../../../../Icons/IconComment'
import styles from './commentsButton.css'

export default function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <IconComment/>
      <span className={styles.commentsNumber}>13</span>
    </button>
  )
}