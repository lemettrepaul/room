/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Connection from './src/pages/connection/Connection';

const App: () => Node = () => {

    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={Connection} title="Login"/>
            </Stack>
        </Router>
    );
};
export default App;
