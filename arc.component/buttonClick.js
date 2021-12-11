import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
export default function Button({ Tytle, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.Toucha}
            >
                <Text>
                    {Tytle}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '70%',
        fontSize: 16,
        borderRadius: 10,
        paddingVertical: 30,
        
    },
    Toucha: {
        height: 45,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFBB4A',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        elevation: 4,
        fontSize: 18
    },
});