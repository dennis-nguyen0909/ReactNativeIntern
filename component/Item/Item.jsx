import React from 'react'
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Input, TextInput } from 'react-native';

export const Item = ({ text, totalX, inputY, handleAddItems, handleRemoveItems, index, handleClickButtonGreen }) => {
    const handleOnPress = () => {
        const total = inputY + index
        totalX = total
        alert(total)
    }
    return (
        <View style={styles.containerChild}>
            <View>
                <Text>{text}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity
                    onPress={handleClickButtonGreen}
                    style={styles.buttonGreen}></TouchableOpacity>
                <TouchableOpacity
                    onPress={handleAddItems}
                    style={styles.buttonBlue}></TouchableOpacity>
                <TouchableOpacity
                    onPress={handleRemoveItems}
                    style={styles.buttonRed}>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerChild: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    }, buttonBlue: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        borderRadius: 50,
    }, buttonGreen: {
        backgroundColor: 'green',
        width: 30,
        height: 30,
        borderRadius: 50,
    }, buttonRed: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 50,
    },
})
