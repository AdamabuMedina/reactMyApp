import React from "react";
import styles from "./userdata.css"

interface IUserDataProps {
    userAvatar: string;
    userName: string;
    publishedTimeAgo: string;
}

export function UserData(props: IUserDataProps) {
    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                <img className={styles.avatar} alt="avatar" src={props.userAvatar}/>
                <a className={styles.userName} href="#user-url">{props.userName}</a>
            </div>
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано</span>
                {props.publishedTimeAgo}
            </span>
        </div>
    )
}