import React, { useRef } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../screens/Dashboard/Dashboard';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

/* ================= CENTER ANIMATED BUTTON ================= */

const AnimatedTabButton = (props: any) => {
  const { children, onPress } = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1.1,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      {...props}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Animated.View
        style={[
          styles.centerBtn,
          { transform: [{ scale }] },
        ]}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

/* ================= BOTTOM TAB NAV ================= */

const DashNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {/* ===== Dashboard ===== */}
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              color={focused ? '#6C63FF' : '#999'}
            />
          ),
        }}
      />

      {/* ===== Center Add Button ===== */}
      <Tab.Screen
        name="Add"
        component={Dashboard}
        options={{
          tabBarButton: props => (
            <AnimatedTabButton {...props}>
              <Icon name="plus" size={28} color="#fff" />
            </AnimatedTabButton>
          ),
        }}
      />

      {/* ===== Profile ===== */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={24}
              color={focused ? '#6C63FF' : '#999'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashNav;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 65,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 10,
    backgroundColor: '#fff',
  },
  centerBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 8,
  },
});
