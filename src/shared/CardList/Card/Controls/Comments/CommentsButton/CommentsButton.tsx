import React from 'react'
import { EIcons, Icon } from '../../../../../Icons/Icon'
import styles from './commentsButton.css'

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comment} size={15}/>
      <span className={styles.commentsNumber}>13</span>
    </button>
  )
}