import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from './TodoItems_style';

function TodoItems({ todo, handleDelete }) {
    const [clicked, setClicked] = useState(false);
    const showAlert = () =>
        Alert.alert(
            "Uyarı!",
            "Silmek istediğinizden emin misiniz?",
            [
                {
                    text: "Sil",
                    onPress: () => handleDelete(todo),
                    style: "destructive",
                },
                {
                    text: "İptal",

                    style: "cancel",
                },
            ],

        );

    return (
        <View style={clicked ? styles.clicked_container : styles.container}>
            <TouchableOpacity
                onLongPress={showAlert}
                onPress={() => {
                    // setClicked(prevState => !prevState) alttaki ile aynı mantık.
                    setClicked(!clicked)
                }}
            >
                <Text style={clicked ? styles.clicked_todo_style : styles.todo_style}>{todo.text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoItems;

