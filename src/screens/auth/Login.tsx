import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import styles from './LoginStyle';
import CustomTextInput from '../../components/form/CustomTextInput';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/colors';
import Fish from '../../components/Fish/Fish';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoginScreenNavigationProp = NativeStackNavigationProp<any, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: LoginProps) => {
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  return (
    <TouchableWithoutFeedback
      onPress={(e) => {
        const { locationX, locationY } = e.nativeEvent;
        setTarget({ x: locationX, y: locationY });
      }}
    >
      <View style={styles.container}>
        {[...Array(1)].map((_, index) => (
          <Fish key={index} target={target || undefined} />
        ))}
        <View style={[styles.loginContainer, { zIndex: 10 }]}>
          {[...Array(1)].map((_, index) => (
            <Fish key={index} target={target || undefined} />
          ))}
          <View style={styles.roundBoxleft} />

          <View style={styles.formContainer}>
            <View style={styles.formInnerContainer}>
              <Text style={styles.title}>Login</Text>

              <CustomTextInput
                error=""
                textLable="Email"
                placeholder="Enter email"
              />

              <CustomTextInput
                error=""
                textLable="Password"
                placeholder="Enter password"
              />

              <Text style={styles.forgotPassword}>Forgot Password?</Text>
              <CustomButton
                textButton="Login"
                backgroundColor={Colors.deepPurple[700]}
              />
              <Text onPress={() => navigation.navigate('Signup')} style={styles.signUpText}>
                Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
              </Text>
            </View>
          </View>

          <View style={styles.roundBoxright} />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
