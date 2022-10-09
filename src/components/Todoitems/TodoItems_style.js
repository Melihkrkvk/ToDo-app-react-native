import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -10,
        marginTop: 20,
        backgroundColor: '#7da453',
    },
    todo_style: {
        color: 'white',
        fontSize: 18,
    },
    clicked_todo_style: {
        color: '#6b7072',
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationColor: '#6b7072',

    },
    clicked_container: {

        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -10,
        marginTop: 20,
        backgroundColor: '#36474f',

    },

});