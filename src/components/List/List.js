import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


const Item = ({ title }) => (
    <View style={styles.listContainer}>
        <Text style={{ ...styles.textList, paddingHorizontal: 30 }}>{title}</Text>
        <TouchableOpacity
            onPress={() => this.deleteTodo(itemData.item._id)}>
            <View style={{ ...styles.iconContainer, position: 'relative', marginRight: 15, height: 20, width: 20 }} >
                <Icon name='delete' color="#9b59b6" size={15} />
            </View>
        </TouchableOpacity >
    </View >
);

export const List = (props) => {
    const { lista } = props;

    console.warn(lista)
    return (

        <FlatList
            data={lista}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
        />
    )
}

const styles = StyleSheet.create({

    textList: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    listContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
})
