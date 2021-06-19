import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../component/Home';
import Category from '../screen/Category';
import ProfileScreen from '../screen/Account';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

const TabBottom = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) =>  <Icon name="home" size={20} color={color} />,
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: '#4b0082',
          labelStyle: {fontSize: 14}
        }}
        >
        <Tab.Screen name="Trang chủ"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="home" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Danh sách"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="list" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Thể loại"
          component={Category}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="book" size={20} color={color} />,
          }}>
        </Tab.Screen>
        <Tab.Screen name="Tài khoản"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) =>  <Icon name="user" size={20} color={color} />,
          }}>
        </Tab.Screen>
      </Tab.Navigator>
  );
}

export default TabBottom;