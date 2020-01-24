// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LoginScreen from '../screens/login-screen';
import { setAppTitle } from '../redux/app';

const LoginScreenContainer = ({
    navigation,
    onSetAppTitle
}) => (
    <LoginScreen
        navigation={navigation}
        onSetAppTitle={onSetAppTitle}
    />
);

LoginScreenContainer.propTypes = {
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
)(LoginScreenContainer);
