// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../component/Home';
import DetailScreen from '../screen/Detail';
import Login from './Login';
import SettingScreen from '../screen/Setting';
import TabBottom from './TabBottom';
import Logo from '../lib/img/logo.png'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
const width = Dimensions.get('window').width;
const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 200, height: 60, marginTop: 10 }}
        source={Logo}
      />
    );
  }
function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#4b0082',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        flexDirection: 'row',
                        alignContent: 'flex-start'
                    }, 
                }}
            >
                <Stack.Screen 
                    name="Drawer" 
                    component={DrawerNavigator} 
                    options={{ 
                        headerTitle: false,
                        headerLeft:props => <LogoTitle {...props} />,
                    }}
                />
                <Stack.Screen 
                    name="TabBottom" 
                    component={TabBottom} 
                    options={{ 
                        headerTitle: false,
                        headerLeft:props => <LogoTitle {...props} />,
                    }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ 
                        headerTitle: false,
                        headerLeft:props => <LogoTitle {...props} />,
                    }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                    options={{ 
                        title: 'Trang chi tiết',
                    }}
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ 
                        title: 'Đăng nhập',
                    }}
                />
                <Stack.Screen 
                    name="TaiKhoan" 
                    component={SettingScreen} 
                    options={{ 
                        title: 'Tài khoản',
                    }}
                />
                <Stack.Screen 
                    name="DanhMuc" 
                    component={SettingScreen} 
                    options={{ 
                        title: 'Danh mục',
                    }}
                />
                <Stack.Screen 
                    name="TacGia" 
                    component={SettingScreen} 
                    options={{ 
                        title: 'Tác giả',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;