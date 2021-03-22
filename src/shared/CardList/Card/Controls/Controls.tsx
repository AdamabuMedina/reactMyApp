import React from "react"
import styles from "./controls.css"
import { KarmaCounter } from "./KarmaCounter"
import {Comments} from "./Comments";
import {Actions} from "./Actions";

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <Comments />
      <Actions />
    </div>
  )
}