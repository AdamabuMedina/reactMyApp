import React from "react";
import styles from "./title.css"

interface ITitleProps {
    text: string
}

export function Title(props: ITitleProps) {
    return (
        <h2 className={styles.title}>
            <a className={styles.postLink} href="#post-link">{props.text}</a>
        </h2>
    )
}