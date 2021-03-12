import React from 'react'
import { EIcons, Icon } from '../../../../../Icons/Icon'
import styles from './saveButton.css'

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon name={EIcons.save} size={20}/>
    </button>
  )
}