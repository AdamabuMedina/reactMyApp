import React from "react";
import styles from "./menu.css"
import {Dropdown} from "../../../Dropdown";
import {MenuIcon,} from "../../../Icons";
import {EColor, Text} from "../../../../Text";
import {MenuItemsList} from "./MenuItemsList";

interface IMenuProps {
    cssStyle: string
}

export function Menu(props: IMenuProps) {

    return (
        <div className={props.cssStyle}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon/>
                    </button>
                }>
                <div className={styles.dropdown}>
                    <MenuItemsList postId={"post"}/>
                    <button className={styles.closeButton}>
                        <Text size={14} mobileSize={12} color={EColor.gray66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    )
}