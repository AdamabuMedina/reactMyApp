import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../../store/rootReducer";
import {CommentForm} from "../CommentForm";

export function CommentFormContainer(
    {
        myRef,
        uncontrolled = true,
        mainComment = false
    }:
        {
            myRef?: React.Ref<HTMLTextAreaElement>,
            uncontrolled?: boolean,
            mainComment?: boolean
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
        <CommentForm
            // value={value}
            // onChange={handleChange}
            // onSubmit={handleSubmit}
            // myRef={myRef}
            // uncontrolled={uncontrolled}
            // mainComment={mainComment}
        />
    )
}