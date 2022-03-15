import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#9b59b6",
    },
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
    textSection: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#9b59b6',
    },
    inputContainer: {
        height: 50,
        paddingHorizontal: 20,
        elevation: 40,
        backgroundColor: 'white',
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 30,
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

export default styles;