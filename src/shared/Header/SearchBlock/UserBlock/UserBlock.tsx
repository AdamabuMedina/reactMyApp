import React from 'react'
import {IconAnon} from '../../../Icons/iconAnon'
import styles from './userBlock.css'

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}


export function UserBlock({ avatarSrc, username }: IUserBlockProps) {

  return (
    <a
    href="https://www.reddit.com/api/v1/authorize?client_id=SCJobOW3EGzptg&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {
          avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <IconAnon />
        }
      </div>
      <div className={styles.username}>
        <span>
          {username || 'Аноним'}
        </span>
      </div>
    </a>
  )
}