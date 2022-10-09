import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import styles from './Input_style';

function Input({ todoadd, input }) {
    const [clicked, setClicked] = useState(false);


    return (
        <View styles={styles.container}>
            <View style={styles.bottom_container}>

                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input_style}
                        placeholderTextColor={'white'}
                        placeholder="Listene bir şeyler ekle..."
                        onChangeText={(text) => {

                            input(text);

                            if (text === '') {
                                setClicked(true)
                            } else {
                                setClicked(false)
                            };
                        }}



                    />
                </View>
                <View style={clicked == false ? styles.button_style : styles.on_change_btn}>
                    <Button color={'white'} title="Kaydet" onPress={todoadd} />
                </View>
            </View>

        </View>
    );
};
export default Input;