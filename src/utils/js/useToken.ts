import React from "react";

export function useToken() {
    const [token, setToken] = React.useState("")

    React.useEffect(() => {
        const url = new URL(window.location.href)

        console.log(url.searchParams.get("token"))
    }, [token])

    return [token]
}