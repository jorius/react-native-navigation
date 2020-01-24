// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

// @styles
const styles = StyleSheet.create({
    loginScreenContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

const LoginScreen = ({
    navigation,
    onSetAppTitle
}) => {
    const handleOnLogin = () => {
        onSetAppTitle('Home');
        navigation.navigate('Tabs');
    };

    return (
        <View style={styles.loginScreenContainer}>
            <Button
                mode="contained"
                onPress={handleOnLogin}
            >
                LOGIN
            </Button>
        </View>
    );
};

LoginScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        setOptions: PropTypes.func.isRequired
    }).isRequired,
    onSetAppTitle: PropTypes.func.isRequired
};

export default LoginScreen;
