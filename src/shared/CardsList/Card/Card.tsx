import React from 'react';
import styles from './card.css';
import {CardTextContent} from "./CardTextContent";
import {CardPreview} from "./CardPreview";
import {CardMenu} from "./CardMenu";
import { Controls } from './Controls';

interface ICardProps {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    };
}

export function Card({post, author}: ICardProps) {
    return (
        <li className={styles.card}>
            <CardTextContent post={post} author={author}/>
            <CardPreview img={post.img}/>
            <CardMenu/>
            <Controls/>
        </li>
    );
}
