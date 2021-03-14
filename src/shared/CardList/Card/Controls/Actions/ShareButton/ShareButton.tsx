import React from 'react'
import { EIcons, Icon } from '../../../../../Icons/Icon'
import styles from './shareButton.css'

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon name={EIcons.share} size={20}/>
    </button>
  )
}