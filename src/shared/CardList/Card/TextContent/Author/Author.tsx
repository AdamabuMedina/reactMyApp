import React from "react"
import styles from "./author.css"

interface IAuthorProps {
   title: string;
   img?: string;
}

export function Author ({title, img}: IAuthorProps) {
   const defaultImg = "https://cdn.dribbble.com/users/1769954/screenshots/14729942/media/60aadac4997286b2fb2793b7ef5b9928.png?compress=1&resize=1600x1200"

   return (
      <a href="#user-url" className={styles.userLink}>
         <img
            src={img ? img : defaultImg}
            alt="avatar"
            className={styles.avatar}
         />
         <span className={styles.username}>{title}</span>
      </a>
   )
}