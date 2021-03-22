import React from 'react';
import styles from './Card.css';
import {Controls} from './Controls';
import {Menu} from './Menu';
import {TextContent} from './TextContent';
import {Preview} from "./Preview";

interface ICardProps {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    }
}

export function Card({post, author}: ICardProps) {

    return (
        <li className={styles.card}>
            <TextContent post={post} author={author}/>
            <Preview img={post.img}/>
            <Menu/>
            <Controls/>
        </li>
    );
}