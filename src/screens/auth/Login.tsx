import { View, Text } from 'react-native'
import React from 'react'
import styles from './LoginStyle'
import CustomTextInput from '../../components/form/CustomTextInput'
import CustomButton from '../../components/common/CustomButton'
import { Colors } from '../../styles/colors'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.roundBoxleft}>

        </View>
        <View style={styles.formContainer}>
          <View style={styles.formInnerContainer}>
          <Text style={styles.title}>Login</Text>
          <CustomTextInput error="" textLable="Email" placeholder='Enter email'/>
          <CustomTextInput error="" textLable="Password" placeholder='Enter password'/>
          <CustomButton textButton='Login' backgroundColor={Colors.deepPurple[700]}/>
          </View>
        </View>
        <View style={styles.roundBoxright}>

        </View>

      </View>
    </View>
  )
}

export default Login