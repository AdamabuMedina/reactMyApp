import React from "react"
import { Link } from "react-router-dom"
import styles from "./title.css"

interface ITitleProps {
   post: {
      id: string;
      title: string;
      img: string;
  }
}

export function Title({post}: ITitleProps  ) {
  return (
   <h2 className={styles.title}>
      <Link to="/posts/1" className={styles.postLink}>
         {post.title}
      </Link>
   </h2>
  )
}