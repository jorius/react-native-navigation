// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import MasterScreen from '../screens/master-screen';
import { setAppTitle } from '../redux/app';

const MasterScreenContainer = ({
    appTitle,
    onSetAppTitle
}) => (
    <MasterScreen
        appTitle={appTitle}
        onSetAppTitle={onSetAppTitle}
    />
);

MasterScreenContainer.propTypes = {
    appTitle: PropTypes.string,
    onSetAppTitle: PropTypes.func.isRequired
};

MasterScreenContainer.defaultProps = {
    appTitle: null
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onSetAppTitle: setAppTitle
}, dispatch);

const mapStateToProps = ({ appInfo }) => ({
    appTitle: appInfo.title
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(MasterScreenContainer);
