import axios from "axios";
import React from "react"
import styles from "./searchblock.css"
import {UserBlock} from "./UserBlock";

interface ISearchBlockProps {
    token: string
}

interface IUserData {
    name?: string
    iconImg?: string
}

export function SearchBlock({token}: ISearchBlockProps) {
    const [data, setData] = React.useState<IUserData>({})

    React.useEffect(() => {
    axios.get("https://oauth.reddit.com/api/v1/me", {
        headers: {Authorization: `baerer ${token}`}
    })
        .then((resp) =>{
            const userData = resp.data
            setData({name: userData.name, iconImg: userData.icon_img})
        })
        .catch(console.log)
    }, [token])

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={data.iconImg} username={data.name}/>
        </div>
    )
}