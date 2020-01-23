# React Native Navigation 101
## How to build a dynamic and scalable react native navigation flow

### Content

It took me a while to understand the complexity of the react native navigation through different navigators, nested navigators and screen, so I hope here you can understand a lot better this subject from my experience.

What we're gonna do here is the following:

[//]: <> (Over here I should include a gif with the behavior of navigate through different screens and tabs)

### Packages and libraries and whatever else we're gonna use and you should be already familiarized with:

- [Expo](https://expo.io/learn)
- [Redux](https://redux.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

### Architecture and folder structure

### Core files, functions and methods to build our navigation

We create the `app.json` file to keep the routes array object structure which should look like this:

```json
[
    ...,
    {
        "component": "FavoritesScreenContainer",
        "icon": "heart",
        "name": "favorites",
        "navigation": ["root", "tabs"],
        "order": 1
    },
    {
        "component": "LoginScreenContainer",
        "defaultRoot": true,
        "icon": "key",
        "name": "login",
        "navigation": ["root"]
    },
    ...
]
```

### Object keys explanation:

`component` - Container screen name. <br />
`icon` - Tab bar icon to display.<br />
`name` - Name to display to the user. <br />
`navigation` - The different navigators where to include that container screen.

### I include other keys such as:
`defaultRoot` To know which route is going to be shown as default in root navigator. <br />
`defaultTabs` To know which route is going to be shown as default in tabs navigator. <br />
`order` To sort the tabs however I want. <br />

You can include the keys you want and handle whatever you need to do with them in the `buildNavigation()` function which is where we go now.

So, we have this function on our `source/config/index.js` file

```javascript
const buildNavigation = (navigationFor) =>
    appRoutes.filter(route => route.navigation.includes(navigationFor))
        .map((route, index) => ({
            ...route,
            description: route.name,
            index,
            key: route.name,
            name: capitalizeFirstLetter(route.name)
        }));
```

And we use it like this a few lines below

```javascript
const rootNavigation = buildNavigation('root');
const tabsNavigation = buildNavigation('tabs');

export default {
    initialState,
    routes: {
        rootNavigation,
        tabsNavigation
    }
}
```

> So, as you though right we create two separate arrays (one for root navigation and one for tabs navigation) and add to each element of each array new properties.

Once the steps above are done we're gonna create the navigation component in `source/components/` like this:

```
ctrl-navigation
├── ctrl-tab-bar
│   ├── index.js
├── root-navigation.js
└── tabs-navigation.js
```

> You can check the `ctrl-tab-bar` component in the github repo to deepen more into it. But in a simple way is just a custom component to render the bottom tab bar in the app. :blush:

Now focus first on the `tabs-navigation.js`

```jsx
// @scripts
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
        tabBar={props => {
            // over here we should return the custom
            // ctrl-tab-bar component mentioned above
            return <TabBarComponent {...props} />;
        }}
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

export default Tabs;
```

As you can see we receive 3 props in the `Tabs` component, a `TabBarComponent`, the `initialRouteName` and an array of `routes` which we iterate to stack all the tabs routes.

*Pretty easy and understable, right?*

Then go the `root-navigation.js`

```jsx
// @packages
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

export default Root;
```

As you can see we receive 4 props in the `Root` component, a `headerProps`, the `onSetAppTitle` action creator and two more objects `rootProps`,
`tabsProps` because this `Root` component is the one that we instance in our main container.

We put a `Stack.Screen` component outside the root routes iteration with the `Tabs` component or in other words our Tabs Navigator to start nesting this navigation flow.

Back to the `source/App.js` which should look like this:

```jsx
// @scripts
import AppContainer from './containers/app';

export default () => <AppContainer />;
```

Then go to `source/containers/app.js` which should look like this:

```jsx
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
```
Let's keep going through the hierarchy, this is the `source/containers/master-screen.js`, over here we're using some redux action creators and reducers state.

```jsx
// @packages
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import MasterScreen from '../screens/master-screen';
import { setAppTitle } from '../redux/app';

const MasterScreenContainer = ({
    appTitle,
    onSetAppTitle,
    userIsLoggedIn
}) => (
    <MasterScreen
        appTitle={appTitle}
        onSetAppTitle={onSetAppTitle}
        userIsLoggedIn={userIsLoggedIn}
    />
);

const mapDispatchToProps = dispatch => bindActionCreators({
    onSetAppTitle: setAppTitle
}, dispatch);

const mapStateToProps = ({ appInfo }) => ({
    appTitle: appInfo.title
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(MasterScreenContainer);
```

Then go to the `source/screens/master-screen/index.js` which should look like this:

```jsx
// @scripts
import CtrlAppBar from '../../components/ctrl-app-bar';
import CtrlRootNavigation from '../../components/ctrl-navigation/root-navigation';
import CtrlTabBar from '../../components/ctrl-navigation/ctrl-tab-bar';
import { config } from '../../config';
import { mapComponent } from '../../config/components/mapper';

const MasterScreen = ({
    appTitle,
    onSetAppTitle
}) => {
    // A simple function to map the component
    const prepareRoutes = routes => routes.map(route => ({
        ...route,
        component: mapComponent(route.component)
    }));

    // The root routes
    const rootRoutes = prepareRoutes(config.routes.root);

    // The initial route name for our root routes
    // Wich is probably the Login
    const rootInitialRouteName = rootRoutes.find(route => route.defaultRoot).key

    // The tabs routes
    const tabsRoutes = prepareRoutes(config.routes.tabs)
        .sort((routeA, routeB) => routeA.order - routeB.order);

    // The initial route name for our tabs routes
    // Wich is probably the Home
    const tabsInitialRouteName = tabsRoutes.find(route => route.defaultTabs).key;

    // Our tab bar comopnent to customize the styles in it
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

export default MasterScreen;
```

Now we have to understand how the `mapComponent()` function works and it's pretty simple, its behavior is:

```javascript
// @scripts
// Import each container with the same name convention from our routes json file
import FavoritesScreenContainer from '../../containers/favorites-screen';
import LoginScreenContainer from '../../containers/login-screen';

// @constants
// Create an object of components
const components = {
    FavoritesScreenContainer,
    LoginScreenContainer
};

// Create a function with a componentName as param
// and returns the component as a Component
/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = componentName =>
    components[componentName];
```

## Now, we're ready to go!

## Notes

I did not explain some of the components and any other logic that is already in the repo to don't make this guide long and just focus on the main subject here: **Build a scalable navigation in a easy way to understand.**

If you have doubts, issues or troubles trying to make this from scratch you can go to the repo and dig deep into the project and see how was everything done. :blush:

[This is the repo on github for this project :blush:](https://github.com/jorius/react-native-navigation)
