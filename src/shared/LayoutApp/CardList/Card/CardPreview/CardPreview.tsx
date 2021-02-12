import React from "react";
import styles from "./cardPreview.css";

export function CardPreview() {
   return (
      <div className={styles.preview}>
                <img className={styles.previewImg}
                     src="https://cdn.dribbble.com/users/957117/screenshots/14878181/media/723a5acbfa893285ac01d6cc05a25f42.png?compress=1&resize=800x600"
                     alt=""
                />
            </div>
   )
}