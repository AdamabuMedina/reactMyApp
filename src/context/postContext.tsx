import React from 'react'
import {usePostsData} from "../hooks";

interface IPostsItem {
    id: string
    text: string
    onClick: (id: string) => void
}

const postsContext = React.createContext<IPostsItem[]>([])
export default postsContext

export function PostsContextProvider({children}: { children: React.ReactNode }) {
    const [posts] = usePostsData()

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}