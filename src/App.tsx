import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
        <GlobalStyle />
    </>
);

export default App;
