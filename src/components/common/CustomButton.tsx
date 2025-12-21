import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CustomButtonStyles'
import { Colors } from '../../styles/colors';

interface CustomButtonProps {
    textButton: string;
    backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ textButton, backgroundColor = Colors.blue[600] }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor }]}>
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton