import React, { useState, useEffect } from 'react';
import './main.global.css';
//import {nanoid} from 'nanoid';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList/CardList';
import useToken from './hooks/useToken';
import tokenContext from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/PostsContext';

function AppComponent() {
  const [token] = useToken();

  return (
     <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
     </tokenContext.Provider>
  )
};

export const App = hot(() => <AppComponent />); 