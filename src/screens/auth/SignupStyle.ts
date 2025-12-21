import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

const { width, height } = Dimensions.get("window");

const SIZE = width * 0.20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: Colors.grey[900],
        fontFamily:'OpenSans-Medium',
    },
    SignupContainer: {
        width: '90%',
        borderRadius: 14,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: Colors.grey[300],
        elevation: 6,
    },
    roundBoxleft: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: Colors.peach[900],
        width: SIZE,
        height: SIZE,
        borderBottomLeftRadius: SIZE / 1,
    },
    roundBoxright: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-start",
        backgroundColor: Colors.peach[500],
        width: SIZE,
        height: SIZE,
        borderTopRightRadius: SIZE / 1,
    },
    formContainer: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    formInnerContainer:{
        marginBottom:20,
    },
    forgotPassword:{
        textAlign:'right',
        color:Colors.peach[700],
        marginBottom:15,
        fontWeight:'500',
    },
    signUpText:{
        textAlign:'center',
        marginTop:20,
        color:Colors.black[800],
        fontSize:16,
    },
    signUpLink:{
        color:Colors.peach[700],
        fontWeight:'600',
    }

});

export default styles;