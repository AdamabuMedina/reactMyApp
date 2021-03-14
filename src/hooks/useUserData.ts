import { IUserData, meRequestAsync } from "./../store/me/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react"
import { RootState } from "../store/rootReducer";


export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const token = useSelector<RootState, string>(state => state.token)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (!token) return
        if (token && token != "undefined" && token != "false") {
            dispatch(meRequestAsync())
        }
    }, [token])

    return {
        data,
        loading
    }
}