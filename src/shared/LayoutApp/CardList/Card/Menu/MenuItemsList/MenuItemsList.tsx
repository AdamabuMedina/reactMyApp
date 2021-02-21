import React from "react";
import styles from "./menuitemslist.css"
import {BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon} from "../../../../Icons";
import {EColor, Text} from "../../../../../Text";
import classNames from "classnames"
import {generateId} from "../../../../../../utils/react/generateRandomIndex";
import {GenericList} from "../../../../../../lessons/GenericList";
import {merge} from "../../../../../../utils/js/merge";

const ITEMS_LIST = [
    {
        As: "li" as const,
        className: classNames(styles.menuItem, styles.menuItemComments),
        icon: <CommentIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Комментарии
            </Text>
        )
    },
    {
        As: "li" as const,
        className: classNames(styles.menuItem, styles.menuItemShared),
        icon: <ShareIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Поделиться
            </Text>
        )
    },
    {
        As: "li" as const,
        className: classNames(styles.menuItem, styles.menuItemShared),
        icon: <ShareIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Поделиться
            </Text>
        )
    },
    {
        As: "li" as const,
        className: styles.menuItem,
        icon: <BlockIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Скрыть
            </Text>
        )
    },
    {
        As: "li" as const,
        className: classNames(styles.menuItem, styles.menuItemSave),
        icon: <SaveIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Сохранить
            </Text>
        )
    },
    {
        As: "li" as const,
        className: styles.menuItem,
        icon: <WarningIcon/>,
        text: (
            <Text size={14} mobileSize={12} color={EColor.gray99}>
                Пожаловаться
            </Text>
        )
    },
].map(generateId)

interface IMenuItemsProps {
    postId: string
}

export function MenuItemsList({postId}: IMenuItemsProps) {
    const [list] = React.useState(ITEMS_LIST)

    const handleClickItem = () => alert(postId)

    return (
        <ul className={styles.menuItemsList}>
            <GenericList list={list.map(merge({onClick: handleClickItem}))}/>
        </ul>
    )
}