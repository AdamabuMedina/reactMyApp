import React from "react"
import { Actions } from "./Actions/Actions"
import { Comments } from "./Comments/Comments"
import styles from "./controls.css"
import { KarmaCounter } from "./KarmaCounter"

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <Comments />
      <Actions />
    </div>
  )
}