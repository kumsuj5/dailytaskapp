import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './StylesCustomTextInput'

interface CustomTextInputProps {
    error: string;
    textLable: string;
    placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ error, placeholder,textLable ,...props}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{textLable}</Text>
            <TextInput style={styles.textInput} placeholder={placeholder} {...props}/>
            {error?<Text style={styles.errortext}>{error}</Text>:null}
        </View>
    )
}

export default CustomTextInput