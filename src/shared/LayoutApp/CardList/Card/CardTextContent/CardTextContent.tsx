import React from "react";
import styles from "./cardTextContent.css"
import {CardTextContentTitle} from "./CardTextContentTitile/CardTextContentTitle";

export function CardTextContent() {
    return (
        <div className={styles.textContent}>
            <CardTextContentTitle/>
        </div>
    )
}