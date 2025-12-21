
import React, { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    textLabel:{
        fontSize:16,
        fontWeight:'500',
        marginTop:5,
        color:Colors.black[500],
        fontFamily:'OpenSans-Medium',
    },
    textInput:{
        width:'100%',
        height:50,
        borderColor:Colors.grey[300],
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginTop:10,
        fontFamily:'OpenSans-Medium',
    },
    errortext:{
        color:Colors.red[500],
        marginTop:5,
        alignItems:'flex-start',
        fontFamily:'OpenSans-Medium',
    }
});
export default styles;