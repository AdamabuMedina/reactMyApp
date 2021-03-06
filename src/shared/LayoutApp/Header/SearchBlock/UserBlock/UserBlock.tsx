import React from "react";
import styles from "./userblock.css"
import {Break} from "../../../../Break";
import {EColor, Text} from "../../../../Text";
import {EIcons, Icon} from "../../../../Icon";

interface IUserBlockProps {
    avatarSrc?: string
    username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
    return (
        <a
        href="https://www.reddit.com/api/v1/authorize?client_id=SCJobOW3EGzptg&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
        className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {
                avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <Icon name={EIcons.anon} size={50}/>
                }
            </div>
            <div className={styles.username}>
                <Break size={12}/>
                <Text size={20} color={username
                    ? EColor.black : EColor.gray99}>
                    {username || "Аноним"}
                </Text>
            </div>
        </a>
    )
}
