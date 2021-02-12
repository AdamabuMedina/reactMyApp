import React from "react";
import styles from "./cardcontrols.css"
import {CardControlsKarma} from "./CardControlsKarma";
import {CardControlsCommentButton} from "./CardControlsCommentButton/CardControlsCommentButton";
import {CardContolsActions} from "./CardControlsActions/CardControlsActions";

export function CardControls() {
    return (
        <div className={styles.controls}>
            <CardControlsKarma/>
            <CardControlsCommentButton/>
            <CardContolsActions/>
        </div>
    )
}
