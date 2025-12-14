import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../styles/colors";

const { width, height } = Dimensions.get("window");

const SIZE = width * 0.40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white[900],
    justifyContent:'space-between'
  },
  nestedContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: Colors.deepPurple[700],
    width: SIZE,
    height: SIZE,
    borderBottomLeftRadius: SIZE / 1,
  },
  nestedContainerBottom: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-start",
    backgroundColor: Colors.blueGrey[700],
    width: SIZE,
    height: SIZE,
    borderTopRightRadius: SIZE / 1,
  },

  title: {
    marginTop: 30,
    fontSize: 40,
    // fontWeight: "700",
    color: Colors.indigo[900],
    letterSpacing: 1,
    alignSelf: "center",
    fontFamily: 'OpenSans-SemiBold',
  },

  subtitle: {
   color: Colors.indigo[900],
    letterSpacing: 1,
    alignSelf: "center",
    fontFamily: 'OpenSans-Regular',
  },
});

export default styles;
