import React from 'react';
import styles from './textContent.css';
import { Title } from './Title';

interface ITextContent {
    data: {
        id: string,
        title: string
     }
}

export function TextContent({data}: ITextContent) {


    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://cdn.dribbble.com/users/1769954/screenshots/14729942/media/60aadac4997286b2fb2793b7ef5b9928.png?compress=1&resize=1600x1200"
                        alt="avatar"
                    />
                    <a href="#use-url" className={styles.username}>
                        Дмитрий Гришин
                    </a>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>Опубликовано</  span>
                        4 часа назад
                    </span>
                </div>
            </div>
            <Title data={data}/>
        </div>
    )
}