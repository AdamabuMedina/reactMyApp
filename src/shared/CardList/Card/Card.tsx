import React from 'react';
import styles from './Card.css';
import {Controls} from './Controls';
import {Menu} from './Menu';
import {TextContent} from './TextContent';
import {Preview} from "./Preview";

interface ICardProps {
    data: {
        id: string,
        title: string
     }
}

export function Card({data}: ICardProps) {

    return (
        <li className={styles.card}>
            <TextContent data={data}/>
            <Preview/>
            <Menu/>
            <Controls/>
        </li>
    );
}