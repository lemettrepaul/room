import React from 'react';
import {Button, TextInput, View} from 'react-native';


const PhoneInput = () => {
    const [phoneNumber, onChangePhoneNumber] = React.useState("");

    const onValidate = () => {
        console.log("==== onValidate in PhoneInput phoneNumber = ", phoneNumber);
    };
    return (
        <View>
            <TextInput
                onChangeText={onChangePhoneNumber}
                value={phoneNumber}
                placeholder="0600000000"
                keyboardType="numeric"
            />
            <Button
                title="Valider"
                onPress={onValidate}
            />
        </View>
    );
};

export default PhoneInput;
