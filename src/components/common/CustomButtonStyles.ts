import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginVertical:10,
    },
    buttonText:{
        color:Colors.white[900],
        fontSize:18,
        fontWeight:'600',
    }
});
export default styles;