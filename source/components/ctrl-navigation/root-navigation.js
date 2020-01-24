// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// @scripts
import Tabs from './tabs-navigation';

// @constants
const Stack = createStackNavigator();

const Root = ({
    headerProps,
    onSetAppTitle,
    rootProps,
    tabsProps
}) => (
    <Stack.Navigator
        headerMode="float"
        initialRouteName={rootProps.initialRouteName}
    >
        <Stack.Screen
            component={() => (
                <Tabs
                    TabBarComponent={tabsProps.TabBarComponent}
                    initialRouteName={tabsProps.initialRouteName}
                    onSetAppTitle={onSetAppTitle}
                    routes={tabsProps.routes}
                />
            )}
            name="Tabs"
            options={headerProps}
        />
        {rootProps.routes.map(route => (
            <Stack.Screen
                component={route.component}
                key={route.key}
                name={route.key}
                options={headerProps}
            />
        ))}
    </Stack.Navigator>
);

Root.propTypes = {
    headerProps: PropTypes.shape({
        header: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.elementType,
            PropTypes.func,
            PropTypes.node
        ]).isRequire
    }).isRequired,
    onSetAppTitle: PropTypes.func.isRequired,
    rootProps: PropTypes.shape({
        initialRouteName: PropTypes.string.isRequired,
        routes: PropTypes.arrayOf(PropTypes.shape({
            component: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.elementType,
                PropTypes.func,
                PropTypes.node
            ]).isRequired,
            defaultRoot: PropTypes.bool,
            defaultTabs: PropTypes.bool,
            icon: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            navigation: PropTypes.arrayOf(PropTypes.string).isRequired,
            order: PropTypes.number,
            permission: PropTypes.string
        })).isRequired
    }).isRequired,
    tabsProps: PropTypes.shape({
        TabBarComponent: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.elementType,
            PropTypes.func,
            PropTypes.node
        ]).isRequired,
        initialRouteName: PropTypes.string.isRequired,
        routes: PropTypes.arrayOf(PropTypes.shape({
            component: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.elementType,
                PropTypes.func,
                PropTypes.node
            ]).isRequired,
            defaultRoot: PropTypes.bool,
            defaultTabs: PropTypes.bool,
            icon: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            navigation: PropTypes.arrayOf(PropTypes.string).isRequired,
            order: PropTypes.number,
            permission: PropTypes.string
        })).isRequired
    }).isRequired
};

export default Root;
