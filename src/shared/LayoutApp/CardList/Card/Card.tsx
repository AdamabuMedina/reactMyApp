import React from "react";
import styles from "./card.css"
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {KarmaButton} from "./Controls/KarmaButton";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent/>
            <Preview
                imgSource="https://avatars.mds.yandex.net/get-pdb/903199/8f573f02-a18b-4d2b-9342-4c0a9f639e3d/s1200?webp=false"
            />
            <Menu cssStyle={styles.menu}/>
            <Controls>
                <KarmaButton value="123"/>
            </Controls>
        </li>
    )
}