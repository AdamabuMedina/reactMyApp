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
    const [nextafter, setNextAfter] = React.useState("")

    const bottomOfList = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        async function load() {
            setLoading(true)
            setErrorLoading("")

            try {
                const { data: {data: {after, children}} } = await axios.get("https://oauth.reddit.com/rising/", {
                    headers: {authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextafter
                    }
                })

                setNextAfter(after)
                setPosts(prevChildren => prevChildren.concat(...children))
            } catch (error) {
                setErrorLoading(String(error))
            }

            setLoading(false)
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load()
            }
        }, {
            rootMargin: "10px"
        })

        if(bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if(bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [bottomOfList.current, nextafter, token])

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

            <div ref={bottomOfList}/>

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