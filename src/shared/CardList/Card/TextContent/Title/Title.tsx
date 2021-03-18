import React from "react"
import { Link } from "react-router-dom"
import styles from "./title.css"

interface ITitleProps {
   data: {
      id: string,
      title: string
   }

}

export function Title({data}: ITitleProps  ) {
  return (
   <h2 className={styles.title}>
      <Link to={`/posts/${data.id}`} className={styles.postLink}>
         {data.title}
      </Link>
   </h2>
  )
}