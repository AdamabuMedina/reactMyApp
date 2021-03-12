import React from 'react';
import styles from './Card.css';
import {Controls} from './Controls';
import {Menu} from './Menu';
import {TextContent} from './TextContent';
import {Preview} from "./Preview";

export function Card({text}: { text: string }) {

    return (
        <li className={styles.card}>
            <TextContent text={text}/>
            <Preview/>
            <Menu/>
            <Controls/>
        </li>
    );
}