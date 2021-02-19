import React from "react"
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/LayoutApp/Layout";
import "./main.global.css"
import {Header} from "./shared/LayoutApp/Header";
import {Content} from "./shared/LayoutApp/Content/Content";
import {CardList} from "./shared/LayoutApp/CardList";


function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardList/>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)