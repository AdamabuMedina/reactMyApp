import React from "react";
import {Card} from "./Card";
import styles from "./cardList.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export function CardList() {
    const token = useSelector<RootState>(state => state.token)
    const [posts, setPosts] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(false)
    const [errorLoading, setErrorLoading] = React.useState("")
    const [nextafter, setNextAfter] = React.useState("")
    const [count, setCount] = React.useState(0)

    const bottomOfList = React.useRef<HTMLDivElement>(null)

    async function load() {
        setLoading(true)
        setErrorLoading("")

        try {
            const { data: {data: {after, children}} } = await axios.get("https://oauth.reddit.com/hot/", {
                headers: {authorization: `bearer ${token}`},
                params: {
                    limit: 10,
                    after: nextafter
                }
            })

            setPosts(prevChildren => prevChildren.concat(...children))
            setCount((count) => {
                if (count == 2) return 1
                return count + 1
            })
            setNextAfter(after)
        } catch (error) {
            setErrorLoading(String(error))
        }

        setLoading(false)
    }

    React.useEffect(() => {
        if (!token || token == "undefined" || token=="false") return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && count < 2) {
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
    }, [bottomOfList.current, token, nextafter, ])

    return (
        <ul className={styles.cardList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: "center"}}>
                    Нет ни одного поста
                </div>
            )}

            {posts.map(({data:{ id, title}}, index) => (
                <Card
                key={index}
                title={title}/>
            ))}

            <div ref={bottomOfList}/>

            {loading && (
                <div style={{textAlign: "center"}}>
                    Загрузка...
                </div>
            )}

            {count >= 2 && (
                <button onClick={load} className={styles.buttonLoad}>
                    Загрузить еще
                </button>
            )}

            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}