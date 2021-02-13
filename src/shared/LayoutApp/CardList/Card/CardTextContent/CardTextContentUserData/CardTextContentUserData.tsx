import React from "react";
import styles from "./cardtextcontentuserdata.css"

export function CardTextContentUserData() {
   return (
<div className={styles.metaData}>
   <div className={styles.userLink}>
      <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
   </div>
   <span className={styles.createdAt}>
   <img
      className={styles.avatar}
      src="https://cdn.dribbble.com/users/295355/avatars/normal/fd69980456acc1b3a5f2a2fde1fa0d68.jpg?1542632080"
      alt="avatar"
   />
      <span className={styles.publishedLabel}>опубликовано
      </span>3 часа назад
   </span>
</div>
   )
}