// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import ProfileScreen from '../screens/profile-screen';
import { setAppTitle } from '../redux/app';

const ProfileScreenContainer = ({
    navigation,
    onSetAppTitle
}) => (
    <ProfileScreen
        navigation={navigation}
        onSetAppTitle={onSetAppTitle}
    />
);

ProfileScreenContainer.propTypes = {
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
)(ProfileScreenContainer);

