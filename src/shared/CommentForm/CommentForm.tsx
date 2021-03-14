import React from "react";
import styles from "./commentform.css"

// interface ICommentForm {
//     myRef?: React.Ref<HTMLTextAreaElement>,
//     uncontrolled?: boolean,
//     mainComment?: boolean,
//     value: string,
//     onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
//     onSubmit: (event: React.FormEvent) => void,
// }
// {
//     myRef, uncontrolled=true, mainComment=false, onChange, onSubmit, value
//     }: ICommentForm

export function CommentForm() {
    const [value, setValue] = React.useState("")
    const [touched, setTouched] = React.useState(false)
    const [valueError, setValueError] = React.useState("")

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        setTouched(true)
        setValueError(validateValue())

        const isFormValid = !validateValue()
        if(!isFormValid) return

        alert("Форма отправлена")
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value)
    }

    function validateValue() {
        if (value.length <= 3) return "Введите больше 3- символов"
        return ""
    }


        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                    className={styles.input}
                    placeholder="Введите комментарий"
                    onChange={handleChange}
                    aria-invalid={valueError ? "true" : undefined}/>
                    {
                        touched && valueError &&
                        (<div>{valueError}</div>)
                    }
                <button className={styles.button} type="submit">
                    Комментировать
                </button>
            </form>
        )
}