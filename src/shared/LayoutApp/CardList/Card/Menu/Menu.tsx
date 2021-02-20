import React from "react";
import styles from "./menu.css"
import {Dropdown} from "../../../Dropdown";
import {
    MenuIcon,
} from "../../../Icons";

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
                Menu
                CloseButton
            </Dropdown>
        </div>
    )
}