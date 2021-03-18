import React from 'react';
import styles from './Card.css';
import {Controls} from './Controls';
import {Menu} from './Menu';
import {TextContent} from './TextContent';
import {Preview} from "./Preview";

interface ICardProps {
    title: string
}

export function Card({title}: ICardProps) {

    return (
        <li className={styles.card}>
            <TextContent title={title}/>
            <Preview/>
            <Menu/>
            <Controls/>
        </li>
    );
}