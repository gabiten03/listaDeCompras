import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { Icon } from 'react-native-vector-icons/MaterialIcons'


const Header = (props) => {
    const { title } = props

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    textHeader: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 30,
    },

})

export default Header