import React from "react"
import {starWars, uniqueNamesGenerator} from "unique-names-generator";

interface IStarWarsNameFunctionState {
    name: string;
    count: number;
}

export function StarWarsNameFunction() {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1})
    // const [name, setName] = React.useState(randomName) // S / () => S
    // const [count, setCount] = React.useState(0)
    // const handleClick = () => {
    //     setName(randomName)
    //     setCount((prevCount) => prevCount + 1)
    //     // setCount(count + 1)  // WRONG!
    // }
    // console.log(">>", count)
    const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: randomName(), count: 0})
    const handleClick = () => {
        setState((prevState) => ({...prevState, name: randomName()}))
        setState((prevState) => ({...prevState, count: prevState.count + 1}))
    }
    console.log(">>", state.count)


    return (
        <section>
            <span>{state.name}</span>
            <div/>
            <button onClick={handleClick}>Мне нужно имя!</button>
        </section>
    )
}