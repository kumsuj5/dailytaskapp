import { View, Text } from "react-native";
import React from "react";
import styles from "./SplashStyle";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nestedContainer}>
            </View>
            <View>

                <Text style={styles.title}>Daily Task</Text>
                {/* Tagline */}
                <Text style={styles.subtitle}>
                    Organize your day. Achieve more.
                </Text>

                {/* Small helper text */}
                <Text style={styles.subtitle}>
                    Plan • Focus • Complete
                </Text>
            </View>
            <View style={styles.nestedContainerBottom}>
            </View>
        </View>
    );
};

export default SplashScreen;
