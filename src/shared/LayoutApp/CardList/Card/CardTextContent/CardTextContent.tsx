import React from "react";
import styles from "./cardTextContent.css"
import {CardTextContentTitle} from "./CardTextContentTitile/CardTextContentTitle";

export function CardTextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://cdn.dribbble.com/users/295355/avatars/normal/fd69980456acc1b3a5f2a2fde1fa0d68.jpg?1542632080"
                        alt="avatar"
                    />
                    <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
                </div>
                <CardTextContentTitle/>
            </div>
        </div>
    )
}