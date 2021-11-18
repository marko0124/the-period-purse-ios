import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './src/home/Calendar';
import Info from './src/info/Info';
import Settings from './src/settings/Settings';
import BloodDrop from './ios/tppapp/Images.xcassets/icons/blood-drop.png'

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
        borderWidth: 2,
        borderColor: '#FFFFFF',
        boxSizing: 'border-box',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#D32729',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          style={{
            width: 24.67,
            height: 30.83
          }}
          source={BloodDrop}
        />
      </View>
    </TouchableOpacity>
);


export function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Settings" component={Settings} />
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
