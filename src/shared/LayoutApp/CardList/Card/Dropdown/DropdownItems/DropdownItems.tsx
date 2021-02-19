import React from "react";
import styles from "./dropdowmitems.css"

interface IDropdownItemsProps {
    title: string
    svgIcon?: React.ReactNode
    onItemClick: () => void;
    additionalClass?: string;
}

export function DropdownItems(props: IDropdownItemsProps) {
    const {title, svgIcon, onItemClick, additionalClass} = props;

    return (
        <div onClick={onItemClick} className={`${styles.itemWrapper} ${additionalClass}`}>
            <div className={styles.svgIcon}>{svgIcon}</div>
            <div className={styles.title}>{title}</div>
        </div>
    )

}
