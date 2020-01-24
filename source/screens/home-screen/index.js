// @packages
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @styles
const styles = StyleSheet.create({
    homeScreenContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

const HomeScreen = () => (
    <View style={styles.homeScreenContainer}>
        <Text>
            Home Screen
        </Text>
    </View>
);

export default HomeScreen;
