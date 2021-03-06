import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import tokenContext from '../shared/context/tokenContext'

interface IUserData {
  name?: string;
  iconImg?: string;
}

export default function useUserData() {
  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get(
      'https://oauth.reddit.com/api/v1/me', 
      {
        headers: { authorization: `bearer ${token}` }
      }
    )
    .then((resp) => {
      const userData = resp.data
      setData({ name: userData.name, iconImg:userData.icon_img });
    })
    .catch(console.log)
  }, [token])

  return [data]
}