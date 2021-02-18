import React from "react"
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/LayoutApp/Layout";
import "./main.global.css"
import {Header} from "./shared/LayoutApp/Header";
import {Content} from "./shared/LayoutApp/Content/Content";
import {CardList} from "./shared/LayoutApp/CardList";
import {GenericList} from "./lessons/GenericList";
import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {merge} from "./utils/js/merge";

const LIST = [
    {text: "some"},
    {text: "other some"},
    {text: "some"},
].map(generateId)

function AppComponent() {
    const [list, setList] = React.useState(LIST)

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id != id))
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString()})))
    }

    return (
        <Layout>
            <Header/>
            <Content>
                <CardList/>
                <button onClick={handleAdd}>Add Element</button>
                <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)