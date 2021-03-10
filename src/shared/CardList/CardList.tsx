import React, {useContext} from 'react';
import PostsContext from '../context/PostsContext';
import {Card} from './Card/Card';
import styles from './cardList.css';

export function CardList() {
    const {posts} = useContext(PostsContext)

    return (
        <ul className={styles.cardList}>
            {posts
                ? posts.map((item) => {
                    const {data} = item
                    return <Card posts={data}/>
                })
                : <Card posts="text"/>
            }
        </ul>
    );
}

;