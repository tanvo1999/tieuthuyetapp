import React, { Component } from 'react';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import { StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FormLogin = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{widthL: width, alignItems: 'center', marginVertical: 20}}>
                <Text style={{fontWeight: '700'}} h3>Đăng nhập</Text>
            </View>
            <View style={{marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Input 
                    label="Email"
                    placeholder="abc@gmail.com"
                    leftIcon={
                        <Icon
                        name='user'
                        size={23}
                        color='black'
                    />} 
                />
                <Input 
                    secureTextEntry={true} 
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    leftIcon={
                        <Icon
                        name='lock'
                        size={23}
                        color='black'
                    />} 
                />

                <ListItem 
                    onPress={() => console.log(1)}
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.85}
                    linearGradientProps={{
                        colors: ['#bc7fe8', '#4b0082'],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                    }}
                    ViewComponent={LinearGradient}
                    containerStyle={styles.button}
                >
                    <ListItem.Content style={{alignItems: 'center'}}>
                        <ListItem.Title numberOfLines={1} style={styles.textButton}>
                            Đăng nhập
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem 
                    onPress={() => console.log(1)}
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.85}
                    linearGradientProps={{
                        colors: ['#ff7261', '#f2260d'],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                    }}
                    ViewComponent={LinearGradient}
                    containerStyle={styles.button}
                >
                    <ListItem.Content style={{alignItems: 'center'}}>
                        <ListItem.Title numberOfLines={1} style={styles.textButton}>
                        <Icon name="google" size={22} color={'#FFF'} /> {'  '}Google
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem 
                    onPress={() => console.log(1)}
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.85}
                    linearGradientProps={{
                        colors: ['#61a0f2', '#1877f2'],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                    }}
                    ViewComponent={LinearGradient}
                    containerStyle={styles.button}
                >
                    <ListItem.Content style={{alignItems: 'center'}}>
                        <ListItem.Title numberOfLines={1} style={styles.textButton}>
                            <Icon name="facebook-square" size={22} color={'#FFF'} /> {'  '}Facebook
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    button: {
        marginTop: 10, 
        height: 70, 
        width: '90%', 
        borderRadius: 15,
    }
});

export default FormLogin;