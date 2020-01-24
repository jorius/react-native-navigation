// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'react-native-paper';

const SettingsScreen = ({
    navigation,
    onSetAppTitle
}) => (
    <List.Section>
        <List.Item
            key="profile"
            left={() => <List.Icon icon="face-profile" />}
            onPress={() => {
                onSetAppTitle('Profile');
                navigation.navigate('profile');
            }}
            title="Profile"
        />
        <List.Item
            key="bell"
            left={() => <List.Icon icon="bell" />}
            onPress={Function.prototype}
            title="Notifications"
        />
        <List.Item
            key="logout"
            left={() => <List.Icon icon="account" />}
            onPress={() => {
                onSetAppTitle('login');
                navigation.navigate('login');
            }}
            title="Logout"
        />
    </List.Section>
);

SettingsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default SettingsScreen;
