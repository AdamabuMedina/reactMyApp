import React from 'react';
import {Card} from './Card';
import styles from './cardList.css';
import postContext from "../../context/postContext";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export function CardList() {
    const token = useSelector<RootState>(state => state.token)
    const [posts, setPosts] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if(!token) return

        async function load() {
            setLoading(true)

            try {
                const { data: {data: {children}} } = await axios.get("https://oauth.reddit.com/rising/", {
                    headers: {authorization: `bearer ${token}`}
                })

                setPosts(children)
            } catch (error) {
                console.error(error)
            }

            setLoading(false)
        }

        load()
    }, [token])

    return (
        <ul className={styles.cardList}>
            {posts.map(post => (
                <Card
                key={post.data.id}
                title={post.data.title}/>
            ))}
        </ul>
    );
}