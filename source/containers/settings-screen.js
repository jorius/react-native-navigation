// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import SettingsScreen from '../screens/settings-screen';
import { setAppTitle } from '../redux/app';

const SettingsScreenContainer = ({
    navigation,
    onSetAppTitle
}) => (
    <SettingsScreen
        navigation={navigation}
        onSetAppTitle={onSetAppTitle}
    />
);

SettingsScreenContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired,
    onSetAppTitle: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onSetAppTitle: setAppTitle
}, dispatch);

export default connect(
    null, mapDispatchToProps
)(SettingsScreenContainer);
