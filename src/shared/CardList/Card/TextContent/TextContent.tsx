import React from 'react';
import styles from './textContent.css';
import {Post} from "../../../Post";

interface ITextContent {
    name?: string
    title?: string
}

export function TextContent({name, title}: ITextContent) {
    const [isModalOpened, setIsModalOpened] = React.useState(false)

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
                        {name}
                    </a>
                    <span className={styles.createdAt}>
              <span className={styles.publishedLabel}>Опубликовано</span>
              4 часа назад
            </span>
                </div>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink} onClick={() => {
                    setIsModalOpened(true)
                }}>
                    {title}
                </a>
                {isModalOpened && (
                    <Post/>
                )}
            </h2>
        </div>
    )
}