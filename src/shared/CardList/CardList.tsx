import React from 'react';
import {Card} from './Card';
import styles from './cardList.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export function CardList() {
    const token = useSelector<RootState>(state => state.token)
    const [posts, setPosts] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(false)
    const [errorLoading, setErrorLoading] = React.useState("")

    React.useEffect(() => {
        if(!token) return

        async function load() {
            setLoading(true)
            setErrorLoading("")

            try {
                const { data: {data: {children}} } = await axios.get("https://oauth.reddit.com/rising/", {
                    headers: {authorization: `bearer ${token}`}
                })

                setPosts(children)
            } catch (error) {
                setErrorLoading(String(error))
            }

            setLoading(false)
        }

        load()
    }, [token])

    return (
        <ul className={styles.cardList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: "center"}}>
                    Нет ни одного поста
                </div>
            )}

            {posts.map(post => (
                <Card
                key={post.data.id}
                title={post.data.title}/>
            ))}
            {loading && (
                <div style={{textAlign: "center"}}>
                    Загрузка...
                </div>
            )}
            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}