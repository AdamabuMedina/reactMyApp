import React from 'react'
import { Dropdown } from '../../../Dropdown/Dropdown'
import IconMenu from '../../../Icons/IconMenu'
import CloseButton from './CloseButton/CloseButton'
import styles from './menu.css'
import MenuItem from './MenuItem/MenuItem'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <IconMenu />
        </button>}>
        <div className={styles.menuContainer}>
          <MenuItem />  
          <CloseButton />
        </div>
      </Dropdown>
   </div>
  )
}