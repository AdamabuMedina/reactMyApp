import React from "react"
import styles from "./cardTextContentTitle.css"

export function CardTextContentTitle() {
    return (
        <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной
                деятельности.
            </a>
        </h2>
    )
}