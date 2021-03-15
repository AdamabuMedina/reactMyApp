import React from "react";
import styles from "./commentform.css"
import {Form, Formik, Field} from "formik"


function validateComment(value: string) {
    let error = '';
    if (value.length <= 3) error = "Должно быть больше 3х символов!"
    return error;
}

export function CommentForm() {
    return (
        <Formik
            initialValues={{
                commentText: '',
            }}
            onSubmit={values => {
                console.log(values);
                alert(`Отправка формы`);
            }}
        >
            {({errors, touched, isValidating}) => (
                <Form className={styles.form}>

                    <Field name="comment" validate={validateComment} as='textarea' className={styles.input}/>
                    {errors.commentText && touched.commentText && <div>{errors.commentText}</div>}

                    <button type="submit" className={styles.button}>Комментировать</button>
                </Form>
            )}
        </Formik>)
}