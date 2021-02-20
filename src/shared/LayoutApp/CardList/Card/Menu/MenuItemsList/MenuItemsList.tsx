import React from "react";
import styles from "./menuitemslist.css"
import {CommentIcon, WarningIcon, BlockIcon, SaveIcon, ShareIcon} from "../../../../Icons";
import {EColor, Text} from "../../../../Text";

interface IMenuItemsProps {
    postId: string
}

export function MenuItemsList({postId}: IMenuItemsProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItemDesktop} onClick={() => alert(postId)}>
                <CommentIcon/>
                <Text size={12} color={EColor.gray99}>Комментарии</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItemDesktop} onClick={() => alert(postId)}>
                <ShareIcon/>
                <Text size={12} color={EColor.gray99}>Поделиться</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem} onClick={() => alert(postId)}>
                <BlockIcon/>
                <Text size={12} color={EColor.gray99}>Скрыть</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItemDesktop} onClick={() => alert(postId)}>
                <SaveIcon/>
                <Text size={12} color={EColor.gray99}>Сохранить</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem} onClick={() => alert(postId)}>
                <WarningIcon/>
                <Text size={12} color={EColor.gray99}>Пожаловаться</Text>
            </li>

        </ul>
    )
}