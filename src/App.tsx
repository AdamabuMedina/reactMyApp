import React from "react"
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/LayoutApp/Layout";
import "./main.global.css"
import {Header} from "./shared/LayoutApp/Header";
import {Content} from "./shared/LayoutApp/Content/Content";
import {CardList} from "./shared/LayoutApp/CardList";
import {Dropdown} from "./shared/LayoutApp/Dropdown";


function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardList/>
                <div style={{padding: 20}}>
                    <br/>
                    <Dropdown
                        onClose={() => console.log("closed")}
                        onOpen={() => console.log("opened")}
                        isOpen={false}
                        button={<button>Test</button>}
                    >
                        <CardList/>
                    </Dropdown>
                </div>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)