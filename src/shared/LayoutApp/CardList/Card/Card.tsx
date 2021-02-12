import React from "react";
import styles from "./card.css"

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img
                            className={styles.avatar}
                            src="https://cdn.dribbble.com/users/295355/avatars/normal/fd69980456acc1b3a5f2a2fde1fa0d68.jpg?1542632080"
                            alt="avatar"
                        />
                        <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
                    </div>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано </span>
                        4 часа назад
                    </span>
                </div>
                <h2 className={styles.title}>
                    <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной
                        деятельности...</a>
                </h2>
            </div>
            <div className={styles.preview}>
                <img className={styles.previewImg}
                     src="https://cdn.dribbble.com/users/957117/screenshots/14878181/media/723a5acbfa893285ac01d6cc05a25f42.png?compress=1&resize=800x600"
                     alt=""
                />
            </div>
            <div className={styles.menu}>
                <button className={styles.menuButton}>
                    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
                    </svg>
                </button>
            </div>
            <div className={styles.controls}>
                <div className={styles.karmaCounter}>
                    <button className={styles.up}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                        </svg>
                    </button>
                    <span className={styles.karmaValue}>123</span>
                    <button className={styles.down}>
                        <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                        </svg>
                    </button>
                </div>
                <button className={styles.commentsButton}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                            fill="#C4C4C4"/>
                    </svg>
                    <span className={styles.commentsNumber}>13</span>
                </button>
                <div className={styles.actions}>
                    <button className={styles.shareButton}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
                            <path
                                d="M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z"
                                fill="white"/>
                        </svg>
                    </button>
                    <button className={styles.saveButton}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
                            <path
                                d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z"
                                fill="white"/>
                        </svg>
                    </button>
                    <button className={styles.deleteButton}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
                            <path
                                d="M6.57143 13.8889C6.57143 14.5 7.08571 15 7.71429 15H12.2857C12.9143 15 13.4286 14.5 13.4286 13.8889V7.22222H6.57143V13.8889ZM7.71429 8.33333H12.2857V13.8889H7.71429V8.33333ZM12 5.55556L11.4286 5H8.57143L8 5.55556H6V6.66667H14V5.55556H12Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}