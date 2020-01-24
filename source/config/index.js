// @json
import appRoutes from './routes/app.json';
import initialState from './data/initial-state.json';

// @scripts
import { capitalizeFirstLetter } from '../util';

/**
 * @param {string} navigationFor
 */
const buildNavigation = (navigationFor) =>
    appRoutes.filter(route => route.navigation.includes(navigationFor))
        .map((route, index) => ({
            ...route,
            description: route.name,
            index,
            key: route.name,
            name: capitalizeFirstLetter(route.name)
        }));

const root = buildNavigation('root');
const tabs = buildNavigation('tabs');

export const config = {
    initialState,
    routes: {
        root,
        tabs
    }
};
