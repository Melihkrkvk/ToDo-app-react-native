import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, Text, View, StyleSheet, Button, TextInput, FlatList, Alert, } from "react-native";
import Input from "./components/Input/Input";
import TodoItems from "./components/Todoitems/TodoItems";

function App() {
    const [todoText, SetTodoText] = useState('');
    const [counter, setCounter] = useState(0);
    const [listTodo, SetListTodo] = useState([

    ]);

    useEffect(() => {

        setCounter(listTodo.length);
    }, [listTodo]);

    function handleDelete(item) {
        const newList = listTodo.filter(listItem => listItem.key !== item.key)
        SetListTodo(newList);
    };


    function addTodo() {
        if (todoText == '') {
            Alert.alert('Listeye boş ekleme yapamazsınız!')
            return null;
        } else {
            const tempList = [...listTodo, { text: todoText, key: Date.now() + Math.floor(Math.random() * 10) }];
            SetListTodo(tempList)
            SetTodoText("");
        }
    };




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_style}>Yapılacaklar</Text>
                <Text style={styles.counter_style}>{counter}</Text>

            </View>


            <FlatList data={listTodo} renderItem={({ item }) => (<TodoItems todo={item} handleDelete={handleDelete} />)} />

            <Input todoadd={addTodo} input={SetTodoText} />


        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#112027',
        flex: 1,
    },
    header_container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header_style: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 28,
    },
    counter_style: {
        margin: 1,
        marginRight: 4,
        fontWeight: 'bold',
        color: '#ffa500',
        fontSize: 28,


    },
});