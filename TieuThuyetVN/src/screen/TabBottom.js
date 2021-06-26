import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../component/Home';
import Category from '../screen/Category';
import List from '../screen/List';
import ProfileScreen from '../screen/Account';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) =>  <Icon name="home" size={20} color={color} />,
        })}
        initialRouteName="Trang chủ"
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
          component={List}
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