import React from 'react';
import styles from "./preview.css";

interface IPreviewProps {
    imgSource: string
}

export function Preview(props: IPreviewProps) {
    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src={props.imgSource} alt="preview"/>
        </div>
    )
}
