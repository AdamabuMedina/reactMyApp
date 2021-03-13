import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from "../../store";
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
        const value = useSelector<RootState, string>(state => state.commentText)
        const dispatch = useDispatch()

        function handleSubmit(event: React.FormEvent) {
            event.preventDefault();
        }

        function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
            dispatch(updateComment(event.target.value))
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
                <button className={styles.button} type="submit">Комментировать</button>
            </form>
        )
}