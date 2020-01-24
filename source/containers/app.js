// @packages
import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

// @scripts
import MasterScreenContainer from './master-screen';
import { store } from '../core';

const AppContainer = () => (
    <ReduxProvider store={store}>
        <PaperProvider>
            <NavigationNativeContainer>
                <MasterScreenContainer />
            </NavigationNativeContainer>
        </PaperProvider>
    </ReduxProvider>
);

export default AppContainer;
