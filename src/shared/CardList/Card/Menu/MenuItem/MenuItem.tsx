import React from 'react'
import IconHide from '../../../../Icons/IconHide'
import IconWarning from '../../../../Icons/IconWarning'
import SaveButton from '../../Controls/Actions/SaveButton/SaveButton'
import ShareButton from '../../Controls/Actions/ShareButton/ShareButton'
import CommentsButton from '../../Controls/Comments/CommentsButton/CommentsButton'
import styles from './menuItem.css'

export default function MenuItem() {
  return (
    <>
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        <CommentsButton />
        <p className={styles.menuItemTitle}>
          Комментарии
        </p>
      </li>
      <li className={styles.menuItem}>
        <ShareButton />
        <p className={styles.menuItemTitle}>
          Поделиться
        </p>
      </li>
      <li className={styles.menuItem}>
        <IconHide />
        <p className={styles.menuItemTitle}>
          Скрыть
        </p>
      </li>
      <li className={styles.menuItem}>
        <SaveButton />
        <p className={styles.menuItemTitle}>
          Сохранить
        </p>
      </li>
      <li className={styles.menuItem}>
        <IconWarning />
        <p className={styles.menuItemTitle}>
          Пожаловаться
        </p>
      </li>
    </ul>
    </>
  ) 
}