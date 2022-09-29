import { View, Text } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from './screens/ProductsScreen';
import DetailScreen from './screens/DetailScreen';
import styles, { COLORS } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                paddingTop: 15
            }
        }}
    >
        <Tab.Screen name="Product" component={ProductsScreen}
            options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon
                        name="home"
                        size={28}
                        style={{ color: focused ? COLORS.primaryDark: COLORS.dark }}
                    />
                    <Text style={{ color: focused ? COLORS.primaryDark: COLORS.dark, fontSize: 12 }}>HOME</Text>
                  </View>
                )
            }}
        />
        <Tab.Screen name="User" component={UserScreen}
            options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon
                        name="user"
                        size={28}
                        style={{ color: focused ? COLORS.primaryDark: 'rgba(0,0,0,0.4)' }}
                    />
                    <Text style={{ color: focused ? COLORS.primaryDark: 'rgba(0,0,0,0.4)', fontSize: 12 }}>USER</Text>
                  </View>
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default Tabs;