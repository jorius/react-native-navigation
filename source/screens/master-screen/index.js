// @packages
import PropTypes from 'prop-types';
import React from 'react';

// @scripts
import CtrlAppBar from '../../components/ctrl-app-bar';
import CtrlRootNavigation from '../../components/ctrl-navigation/root-navigation';
import CtrlTabBar from '../../components/ctrl-navigation/ctrl-tab-bar';
import { config } from '../../config';
import { mapComponent } from '../../config/mapper';

// @constants
const COMMON_ICON_SIZE = 25;

const MasterScreen = ({
    appTitle,
    onSetAppTitle
}) => {
    const prepareRoutes = routes => routes.map(route => ({
        ...route,
        component: mapComponent(route.component)
    }));

    const rootRoutes = prepareRoutes(config.routes.root);

    const rootInitialRouteName = rootRoutes.find(route => route.defaultRoot).key;

    const tabsRoutes = prepareRoutes(config.routes.tabs)
        .sort((routeA, routeB) => routeA.order - routeB.order);

    const tabsInitialRouteName = tabsRoutes.find(route => route.defaultTabs).key;

    const TabBarComponent = props => (
        <CtrlTabBar
            iconSize={COMMON_ICON_SIZE}
            onSetAppTitle={onSetAppTitle}
            {...props}
        />
    );

    return (
        <CtrlRootNavigation
            headerProps={{
                header: () => (
                    <CtrlAppBar
                        subtitle={appTitle}
                        title={appTitle}
                    />
                ),
                headerShown: appTitle !== 'login'
            }}
            onSetAppTitle={onSetAppTitle}
            rootProps={{
                initialRouteName: rootInitialRouteName,
                routes: rootRoutes
            }}
            tabsProps={{
                TabBarComponent,
                initialRouteName: tabsInitialRouteName,
                routes: tabsRoutes
            }}
        />
    );
};

MasterScreen.propTypes = {
    appTitle: PropTypes.string,
    onSetAppTitle: PropTypes.func.isRequired
};

MasterScreen.defaultProps = {
    appTitle: null
};

export default MasterScreen;
