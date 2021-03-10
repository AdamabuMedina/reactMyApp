import React from "react";
import ReactDOM from "react-dom";
import styles from "./post.css"

export function Post() {
    const node = document.querySelector("#modal_root")
    if (!node) return null

    return ReactDOM.createPortal((
        <div>
            <h2>Следует Отметить, что новая модель организационной деятельности поможет</h2>

            <div>
                <p>Есть над чем задуматься: тщятельное иследование конкурентов представляют собой</p>
                <p>Есть над чем задуматься: тщятельное иследование конкурентов представляют собой</p>
                <p>Есть над чем задуматься: тщятельное иследование конкурентов представляют собой</p>
            </div>
        </div>
    ), node)
}