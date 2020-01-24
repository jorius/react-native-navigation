// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// @constants
const Tab = createBottomTabNavigator();

const Tabs = ({
    TabBarComponent,
    initialRouteName,
    routes
}) => (
    <Tab.Navigator
        initialRouteName={initialRouteName}
        tabBar={props => <TabBarComponent {...props} />}
    >
        {routes.map(route => (
            <Tab.Screen
                component={route.component}
                key={route.key}
                name={route.name}
                options={{
                    icon: route.icon,
                    title: route.description
                }}
            />
        ))}
    </Tab.Navigator>
);

Tabs.propTypes = {
    TabBarComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.elementType,
        PropTypes.func,
        PropTypes.node
    ]).isRequired,
    initialRouteName: PropTypes.string.isRequired,
    onSetAppTitle: PropTypes.func.isRequired,
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
};

export default Tabs;
