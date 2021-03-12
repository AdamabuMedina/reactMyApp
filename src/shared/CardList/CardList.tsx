import React from 'react';
import {Card} from './Card';
import styles from './cardList.css';
import postContext from "../../context/postContext";

export function CardList() {
    const posts = React.useContext(postContext)

    return (
        <ul className={styles.cardList}>
            {
                posts.length ?
                    posts.map(({text, id}) => (
                        <Card text={text} key={id}/>
                    ))
                    :
                    <Card text={"text"}/>
            }
        </ul>
    );
}