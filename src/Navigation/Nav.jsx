import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DashNav from './DashNav';
import MainNav from './MainNav';

const Nav = () => {
    return (
        <NavigationContainer>
            <DashNav />
            {/* <MainNav /> */}
        </NavigationContainer>
    )
}

export default Nav