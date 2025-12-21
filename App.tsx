import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/screens/splash/SplashScreen';
import Nav from './src/Navigation/Nav';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      {/* 🔥 FULL SCREEN STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // light-content if dark bg
      />

      {showSplash ? <SplashScreen /> : <Nav />}
    </SafeAreaProvider>
  );
};

export default App;
