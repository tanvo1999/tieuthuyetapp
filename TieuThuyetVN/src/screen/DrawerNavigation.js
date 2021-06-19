import { createDrawerNavigator } from '@react-navigation/drawer';
import  React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import TabBottom from './TabBottom';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Trang chủ" component={TabBottom} />
            <Drawer.Screen name="Đăng nhập" component={Login} />
            <Drawer.Screen name="Tài khoản" component={Login} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;