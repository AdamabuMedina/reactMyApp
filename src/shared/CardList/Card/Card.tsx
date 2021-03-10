import React from 'react';
import styles from './Card.css';
import {Controls} from './Controls/Controls';
import {Menu} from './Menu/Menu';
import {Preview} from './Preview/Preview';
import {TextContent} from './TextContent/TextContent';

interface ICard {
    posts: {}
}

interface ICardData {
    thumbnail?: string
    author?: string
    title?: string
}

export function Card({posts}: ICard) {
    const {thumbnail, author, title}: ICardData = posts
    console.log(posts)

    function PreviewShow() {
        if (thumbnail) {
            if (thumbnail.indexOf('jpg') === -1) {
                return
            }
        }
        return <Preview img={thumbnail}/>
    }

    return (
        <li className={styles.card}>
            <TextContent name={author} title={title}/>
            {PreviewShow()}
            <Menu/>
            <Controls/>
        </li>
    );
};