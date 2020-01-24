// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';

const CtrlAppBar = ({
    subtitle,
    title
}) => (
    <Appbar.Header>
        <Appbar.Content
            subtitle={subtitle}
            title={title}
        />
        <Appbar.Action
            icon="magnify"
            key="search"
            onPress={Function.prototype}
        />
        <Appbar.Action
            icon="menu"
            key="settings"
            onPress={Function.prototype}
        />
    </Appbar.Header>
);

CtrlAppBar.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string
};

CtrlAppBar.defaultProps = {
    subtitle: null,
    title: null
};

export default CtrlAppBar;
