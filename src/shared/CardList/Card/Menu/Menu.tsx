import React from 'react'
import { Dropdown } from '../../../Dropdown/Dropdown'
import { EIcons, Icon } from '../../../Icons/Icon'
import { CloseButton } from './CloseButton'
import { MenuItem } from './MenuItem'
import styles from './menu.css'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <Icon name={EIcons.menu} size={5} />
        </button>}>
        <div className={styles.menuContainer}>
          <MenuItem />
          <CloseButton />
        </div>
      </Dropdown>
   </div>
  )
}