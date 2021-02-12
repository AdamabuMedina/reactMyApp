import React from "react"
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {ThreadTitle} from "./ThreadTitle/ThreadTitle";
import {SortBlock} from "./SortBlock/SortBlock";
import styles from "./header.css"

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    )
}