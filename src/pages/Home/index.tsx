import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>It's Working!!</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },


    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },


    footer: {},

    select: {},
});
export default Index;