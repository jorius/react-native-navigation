// @scripts
import FavoritesScreenContainer from '../containers/favorites-screen';
import HomeScreenContainer from '../containers/home-screen';
import LoginScreenContainer from '../containers/login-screen';
import NotificationsScreenContainer from '../containers/notifications-screen';
import ProfileScreenContainer from '../containers/profile-screen';
import SettingsScreenContainer from '../containers/settings-screen';

// @constants
const components = {
    FavoritesScreenContainer,
    HomeScreenContainer,
    LoginScreenContainer,
    NotificationsScreenContainer,
    ProfileScreenContainer,
    SettingsScreenContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = componentName =>
    components[componentName];
