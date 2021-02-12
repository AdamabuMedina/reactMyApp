import React from "react";
import styles from "./cardlist.css"
import {Card} from "./Card/Card";

export function CardList() {
    return (
        <ul className={styles.cardsList}>
            <Card/>
        </ul>
    )
}