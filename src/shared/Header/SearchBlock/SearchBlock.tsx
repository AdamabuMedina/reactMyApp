import React, {useContext} from 'react';
import userContext from '../../../context/userContext';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock/UserBlock';

export function SearchBlock() {
 const {name, iconImg} = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name}/>
    </div>
  )
};