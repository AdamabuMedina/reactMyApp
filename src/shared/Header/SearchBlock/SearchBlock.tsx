import React, {useContext} from 'react';
import styles from './searchBlock.css';
import {UserBlock} from './UserBlock';
import {userContext} from "../../../context";

export function SearchBlock() {
    const {name, iconImg} = useContext(userContext)

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name}/>
        </div>
    )
}