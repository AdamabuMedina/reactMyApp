import React from 'react';
import { Author } from './Author';
import styles from './textContent.css';
import { Title } from './Title';

interface ITextContent {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    };
}

export function TextContent({post, author}: ITextContent) {


    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <Author title={author.title} img={author.img}/>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>Опубликовано</  span>
                        4 часа назад
                    </span>
            </div>
            <Title post={post}/>
        </div>
    )
}