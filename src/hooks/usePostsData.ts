import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import tokenContext from '../shared/context/tokenContext'

interface IPostsData {
  posts?: []
}

export default function usePostsData() {
  const [post, setPost] = useState<IPostsData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get(
      'https://oauth.reddit.com/best',
      {
        headers: { authorization: `bearer ${token}` }
      }
    )
    .then((response) => {
      const data = response.data.data
      setPost({posts: data.children})
    })
    .catch(console.log)

  },[token])

  return [post]
}