import { useSelector } from 'react-redux';
import React from 'react'
import axios from 'axios'
import { RootState } from '../store/actionCreator';

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = React.useState<IUserData>({
        name: "",
        iconImg: "",
    })

    const token = useSelector<RootState, string>(state => state.token)

    React.useEffect(() => {
        if (token && token != "undefined" && token != "false") {
            axios.get(
                'https://oauth.reddit.com/api/v1/me',
                {
                    headers: {authorization: `bearer ${token}`}
                }
            )
                .then((res) => {
                    const userData = res.data
                    setData({name: userData.name, iconImg: userData.icon_img});
                })
                .catch(console.log)
        }
    }, [token])

    return [data]
}