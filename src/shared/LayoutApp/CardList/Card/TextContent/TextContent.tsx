import React from 'react';
import styles from "./textcontent.css"
import {UserData} from "./UserData/UserData";
import {Title} from "./Title";

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <UserData
                userAvatar="https://avatars.mds.yandex.net/get-pdb/903199/8f573f02-a18b-4d2b-9342-4c0a9f639e3d/s1200?webp=false"
                userName="Дмитрий Гришин"
                publishedTimeAgo="4 часа назад"
            />
            <Title text="Противоположная точка зрения на данную проблему"/>
        </div>
    )
}