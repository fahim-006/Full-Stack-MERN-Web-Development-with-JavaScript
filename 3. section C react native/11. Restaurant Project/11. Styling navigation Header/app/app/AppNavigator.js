import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import Icon from './components/Icon';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon />),
                headerStyle: {
                    backgroundColor: '#F53B50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} options={({ route }) => ({ title: route.params.dish.name })} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;