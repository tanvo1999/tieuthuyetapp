// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../component/Home';
import DetailScreen from '../screen/Detail';
import Login from './Login';
import SettingScreen from '../screen/Setting';
import TabBottom from './TabBottom';
import Logo from '../lib/img/logo.png'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
const width = Dimensions.get('window').width;
const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 200, height: 60, marginLeft: -20 }}
        source={Logo}
      />
    );
}

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == 'Trang chủ' || routeName == 'Tài khoản' || typeof(routeName) == 'undefined') {
        return -1;
    }
    return routeName;
}

function App() {
  return (
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
                    name="TabBottom" 
                    component={TabBottom} 
                    initialParams="Trang chủ"
                    options= {({ navigation, route }) => ({ 
                        headerTitle: getHeaderTitle(route) == -1 ? false : getHeaderTitle(route),
                        headerLeft:props => getHeaderTitle(route) == -1 ? <LogoTitle {...props} />: null,
                        headerRight:() => getHeaderTitle(route) == -1 ? 
                        <View style={{marginRight: 10}} >
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                                <MaterialCommunityIcons name="menu" size={36} color={'#fff'} />
                                <Text style={{color: '#fff', fontWeight:'bold', marginTop: -7}}>Menu</Text>
                            </TouchableOpacity>
                        </View> : null,
                    })}
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
  );
}

export default App;