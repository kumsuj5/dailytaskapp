import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import styles from './SignupStyle';
import CustomTextInput from '../../components/form/CustomTextInput';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/colors';
import Fish from '../../components/Fish/Fish';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type SignupScreenNavigationProp = NativeStackNavigationProp<any, 'Signup'>;

interface SignupProps {
  navigation: SignupScreenNavigationProp;
}

const Signup = ({ navigation }: SignupProps) => {
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
        <View style={[styles.SignupContainer, { zIndex: 10 }]}>
          {[...Array(5)].map((_, index) => (
            <Fish key={index} target={target || undefined} />
          ))}
          <View style={styles.roundBoxleft} />

          <View style={styles.formContainer}>
            <View style={styles.formInnerContainer}>
              <Text style={styles.title}>Signup</Text>

              <CustomTextInput
                error=""
                textLable="Full Name"
                placeholder="Enter full name"
              />

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
              <CustomTextInput
                error=""
                textLable="Confirm Password"
                placeholder="Enter confirm password"
              />
              <BouncyCheckbox
                size={20}
                fillColor={Colors.peach[700]}
                unFillColor={Colors.peach[100]}
                text="I agree to the terms and conditions"
                textStyle={{ color: Colors.black[800], fontSize: 14 , marginVertical: 10}}
              />
              <CustomButton
                textButton="Signup"
                backgroundColor={Colors.peach[700]}
              />
              <Text onPress={() => navigation.goBack()} style={styles.signUpText}>
                Already have an account? <Text style={styles.signUpLink}>Login</Text>
              </Text>
            </View>
          </View>

          <View style={styles.roundBoxright} />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
