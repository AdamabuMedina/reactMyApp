import React from "react"
import { comment, commentContext } from "../../../context/commentContext"
import { CommentForm } from "../../CommentForm";
import { EIcons, Icon } from "../../Icons/Icon";
import styles from "./postscomments.css"

interface IPostComments {
   comments?: Array<comment>,
}

function commentSearch(arr?: comment[], search?: number): any {
   let result: comment | boolean = false;

   if (!arr) return false;
   let i:number
   result = false

   for(i=0;i<arr.length;i++) {
      if (arr[i] && arr[i].comments) {
          result = commentSearch(arr[i].comments, search);
      }
      if (arr[i].id == search) {
        result = arr[i];
        break;
      }
    }
    return result;
}

export function PostsComments({comments}: IPostComments) {
   const {activeComment, onChangeActive, allComments, onChangeComments} = React.useContext(commentContext)
   let commentsReady: comment[]
   if (!allComments) return null
   if(comments && typeof comments !== "undefined") {
      commentsReady = comments
   } else {
      commentsReady = allComments
   }

   React.useEffect(() => {
      if (activeComment >= 0) {
         let our_element = commentSearch(allComments, activeComment)
         our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = "flex" : our_element.ref.current.parentNode.style.display = "none";
         our_element.ref.current.placeholder = 'Введите комментарий';
         our_element.ref.current.focus();
      }
   }, [activeComment])

   return(
      <div>
         {
            commentsReady.map(({name, time, text, comments, category, visibleComment = false, ref, id}, index) => {
               return (
                  <div className={styles.commentContainer} key={Math.random()}>
                     <div className={styles.leftCommentBlock}>
                        <div className={styles.karmaCounter}>
                           <button className={styles.up}>
                              <svg
                                 width="19"
                                 height="10"
                                 viewBox="0 0 19 10"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                              </svg>
                           </button>
                           <span className={styles.karmaValue}></span>
                           <button className={styles.down}>
                              <svg
                                 width="19"
                                 height="10"
                                 viewBox="0 0 19 10"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
                              </svg>
                           </button>
                        </div>
                        <div className={styles.greyPillar}></div>
                     </div>
                     <div className={styles.rightCommentBlock}>
                        <div className={styles.metaData}>
                           <div className={styles.userLink}>
                              <img
                                    className={styles.avatar}
                                    src="https://cf.bstatic.com/xdata/images/hotel/square200/185864689.jpg?k=5eb72cfa721a10530a817680daf950124600cc58cbf9930cfe5f5439254e3ad8&o="
                                    alt="avatar"
                              />
                              <a href="#user-url" className={styles.username}>
                                 {name}
                              </a>
                           </div>
                           <div className={styles.createdAt}>
                              <span className={styles.publishedLabel}>
                                 published&nbsp;
                              </span>
                              {time}
                           </div>
                           <div className={styles.category}>
                              {category}
                           </div>
                        </div>
                        <div className={styles.commentText}>
                           <p>{text}</p>
                           <span className={styles.commentAction}
                              onClick={(e) => {
                                 let our_element = commentSearch(allComments, id)
                                 our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = "flex" : our_element.ref.current.parentNode.style.display = "none"
                                 our_element.ref.current.focus()
                                 onChangeActive(id)
                                 e.stopPropagation()
                              }}>
                                 <Icon name={EIcons.message} size={14}/>
                                 <span data-test={`${Math.random()}`}>
                                    Reply
                                 </span>
                           </span>
                           <span className={styles.commentAction}>
                              <Icon name={EIcons.share} size={14} />
                              <span>Share</span>
                           </span>
                           <span className={styles.commentAction}>
                              <Icon name={EIcons.complain} size={14} />
                              <span>Complain</span>
                           </span>
                        </div>
                        <CommentForm myRef={ref} uncontrolled={true}/>
                        {
                           comments &&
                           <div>
                              <PostsComments comments={comments}/>
                           </div>
                        }
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}