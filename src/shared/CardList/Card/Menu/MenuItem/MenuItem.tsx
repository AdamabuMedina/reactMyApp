import React from 'react'
import { EIcons, Icon } from '../../../../Icons/Icon'
import styles from './menuItem.css'

export function MenuItem() {
  return (
    <>
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        <Icon name={EIcons.message} size={14} />
        <p className={styles.menuItemTitle}>
          Комментарии
        </p>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.share} size={14} />
        <p className={styles.menuItemTitle}>
          Поделиться
        </p>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.hide} size={14} />
        <p className={styles.menuItemTitle}>
          Скрыть
        </p>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.save} size={14} />
        <p className={styles.menuItemTitle}>
          Сохранить
        </p>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcons.complain} size={14}/>
        <p className={styles.menuItemTitle}>
          Пожаловаться
        </p>
      </li>
    </ul>
    </>
  )
}