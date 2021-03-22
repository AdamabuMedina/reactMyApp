import React from "react";
import {Card} from "./Card";
import styles from "./cardList.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { IPostItem, postsRequestAsync } from "../../store/posts/actions";

export function CardList() {
    const posts = useSelector<RootState, IPostItem[]>(state => state.posts.data.posts)
    const numberOfLoads = useSelector<RootState, number>(state => state.posts.data.numberOfLoads)
    const loading = useSelector<RootState, boolean>(state => state.posts.loading)
    const errorLoading = useSelector<RootState, string>(state => state.posts.error)
    const dispatch = useDispatch()

    const cards = posts.map((post) => {
        return <Card key={post.post.id} post={post.post} author={post.author}/>
    })

    const bottomOfList = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && (numberOfLoads % 3 !== 0 || numberOfLoads === 0)) {
                dispatch(postsRequestAsync())
            }
        }, {
            rootMargin: '10px',
        })

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [posts])

    return (
        <ul className={styles.cardList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: "center"}}>
                    Нет ни одного поста
                </div>
            )}

            {cards}

            <div ref={bottomOfList}/>

            {loading && (
                <div style={{textAlign: "center"}}>
                    Загрузка...
                </div>
            )}

            {numberOfLoads % 3 === 0 && cards.length !== 0 && !loading && !errorLoading && (
                <button onClick={() => dispatch(postsRequestAsync())} className={styles.buttonLoad}>Загрузить ещё</button>
            )}

            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}