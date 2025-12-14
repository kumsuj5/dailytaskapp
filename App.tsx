import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import SplashScreen from './src/screens/splash/SplashScreen';
import Nav from './src/Navigation/Nav';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000);
  }, []);

  if (showSplash)
    return (
      <SplashScreen />
    );
  return (
    <View style={{ flex: 1 }}>
      <Nav />
    </View>
  )
}

export default App