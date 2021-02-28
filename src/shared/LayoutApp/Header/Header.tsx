import React from "react"
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {ThreadTitle} from "./ThreadTitle/ThreadTitle";
import {SortBlock} from "./SortBlock/SortBlock";
import styles from "./header.css"

interface IHeaderProps {
    token: string
}

export function Header({token}: IHeaderProps) {

    return (
        <header className={styles.header}>
            <SearchBlock token={token}/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    )
}