// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// @styles
const styles = StyleSheet.create({
    goBackButton: {
        marginBottom: 15
    },
    profileScreenContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

const ProfileScreen = ({
    onSetAppTitle,
    navigation
}) => (
    <View style={styles.profileScreenContainer}>
        <Button
            mode="contained"
            onPress={() => {
                navigation.goBack();
            }}
            style={styles.goBackButton}
        >
            GO BACK
        </Button>
        <Button
            mode="contained"
            onPress={() => {
                onSetAppTitle('login');
                navigation.navigate('login');
            }}
        >
            LOGOUT
        </Button>
    </View>
);

ProfileScreen.propTypes = {
    onSetAppTitle: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default ProfileScreen;
