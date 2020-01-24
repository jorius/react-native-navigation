// @packages
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @styles
const styles = StyleSheet.create({
    notificationsScreenContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

const NotificationsScreen = () => (
    <View style={styles.notificationsScreenContainer}>
        <Text>
            Notifications Screen
        </Text>
    </View>
);

export default NotificationsScreen;
