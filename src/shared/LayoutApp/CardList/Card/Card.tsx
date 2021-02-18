import React from "react";
import styles from "./card.css"
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {KarmaButton} from "./Controls/KarmaButton";
import {CommentButton} from "./Controls/CommentButton";
import {Actions} from "./Controls/Actions";
import {ShareButton} from "./Controls/Actions/ShareButton";
import {SaveButton} from "./Controls/Actions/SaveButton";

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
                <CommentButton commentCount="234"/>
                <Actions>
                    <ShareButton/>
                    <SaveButton/>
                </Actions>
            </Controls>
        </li>
    )
}