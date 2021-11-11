import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './src/home/Calendar';
import Info from './src/info/Info';
import Settings from './src/settings/Settings';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow
        }}
        onPress={onPress}
    >
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#D32729'
      }}>

      </View>
    </TouchableOpacity>
);


function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}


export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Info" component={Info} options={{
            headerShown: false
          }}/>
          <Tab.Screen name="MiddleButton" component={Calendar} options={{
            headerShown: false,
            tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
            )
          }}/>
          <Tab.Screen name="Settings" component={Settings} options={{
            headerShown: false
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

