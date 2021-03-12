import React from "react";
import { commentContext } from "../../context/commentContext";
import styles from "./commentform.css"

export function CommentForm(
    {
        myRef,
        uncontrolled=true,
        mainComment=false}:
        {myRef?: React.Ref<HTMLTextAreaElement>,
        uncontrolled?: boolean,
        mainComment?:boolean
    }) {
        const {value, onChange } = React.useContext(commentContext)

        function handleSubmit(event: React.FormEvent) {
            event.preventDefault();
        }

        function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
            onChange(event.target.value)
        }

        return (
            <form
                className={mainComment? styles.form:styles.hidden}
                onSubmit={handleSubmit}
            >
                {
                    uncontrolled ?
                    <textarea ref={myRef} className={styles.input} placeholder="Введите комментарий"/> :
                    <textarea ref={myRef} className={styles.input} value={value} onChange={handleChange} placeholder="Введите комментарий"/>
                }
                <button className={styles.button} type="submit">Comment</button>
            </form>
        )
}