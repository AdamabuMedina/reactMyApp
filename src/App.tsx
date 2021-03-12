import React from 'react';
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import {Header} from './shared/Header/Header';
import {Content} from './shared/Content';
import {CardList} from './shared/CardList'
import {tokenContext, UserContextProvider} from './context';
import {PostsContextProvider} from './context/postContext';
import {useToken} from "./hooks";
import { comment, commentContext } from './context/commentContext';

function AppComponent() {
    const [token] = useToken();
    const [commentValue, setCommentValue] = React.useState("")
    const [commentActive, setCommentActive] = React.useState(-1)
    const CommentProvider = commentContext.Provider
    const [commentComments, setComments] = React.useState<comment[]|null>(
        [
            {
                name: "Adam 1",
                time: "1 час назад",
                text: "Комментарий 1, Комментарий 1, Комментарий 1",
                category: "Спорт",
                id: 1,
                ref: React.useRef<HTMLTextAreaElement>(null)
            },
            {
                name: "Adam 2",
                time: "2 часа назад",
                text: "Комментарий 2, Комментарий 2, Комментарий 2",
                category: "Спорт",
                id: 2,
                ref: React.useRef<HTMLTextAreaElement>(null),

                comments: [
                    {
                        name: "Adam 3",
                        time: "3 часа назад",
                        text: "Комментарий 3, Комментарий 3, Комментарий 3",
                        category: "Спорт",
                        id: 3,
                        ref: React.useRef<HTMLTextAreaElement>(null)
                    },
                ]
            },
            {
                name: "Adam 4",
                time: "24 часа назад",
                text: "Комментарий 4, Комментарий 4, Комментарий 4",
                category: "Спорт",
                id: 24,
                ref: React.useRef<HTMLTextAreaElement>(null)
            }
        ]
    )

    return (
        <tokenContext.Provider value={token}>
            <CommentProvider value={{
                value: commentValue,
                onChange: setCommentValue,
                onChangeActive: setCommentActive,
                activeComment: commentActive,
                allComments: commentComments,
                onChangeComments: setComments,
            }}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header/>
                        <Content>
                            <CardList/>
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
            </CommentProvider>
        </tokenContext.Provider>
    )
};

export const App = hot(() => <AppComponent/>);