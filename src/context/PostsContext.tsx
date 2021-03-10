import React from 'react'
import usePostsData from '../hooks/usePostsData'

interface IPostsContextData {
  posts?: []
}

const PostsContext = React.createContext<IPostsContextData>({})

export default PostsContext

export function PostsContextProvider({children}: {children: React.ReactNode}) {
  const [post] = usePostsData()

  return (
    <PostsContext.Provider value={post}>
      {children}
    </PostsContext.Provider>
  )
}