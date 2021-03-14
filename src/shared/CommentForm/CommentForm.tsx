import React from "react";
import styles from "./commentform.css"

interface ICommentForm {
    myRef?: React.Ref<HTMLTextAreaElement>,
    uncontrolled?: boolean,
    mainComment?: boolean,
    value: string,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (event: React.FormEvent) => void,
}

export function CommentForm({
    myRef, uncontrolled=true, mainComment=false, onChange, onSubmit, value
    }: ICommentForm) {

        return (
            <form
                className={mainComment? styles.form:styles.hidden}
                onSubmit={onSubmit}
            >
                {
                    uncontrolled ?
                    <textarea ref={myRef} className={styles.input} placeholder="Введите комментарий"/> :
                    <textarea ref={myRef} className={styles.input} value={value} onChange={onChange} placeholder="Введите комментарий"/>
                }
                <button className={styles.button} type="submit">
                    Комментировать
                </button>
            </form>
        )
}