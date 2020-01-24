// @packages
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @styles
const styles = StyleSheet.create({
    favoritesScreenContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

const FavoritesScreen = () => (
    <View style={styles.favoritesScreenContainer}>
        <Text>
            Favorites Screen
        </Text>
    </View>
);

export default FavoritesScreen;
