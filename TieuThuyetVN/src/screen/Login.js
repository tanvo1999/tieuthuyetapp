import React, { Component } from 'react';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import { StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FormLogin = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{widthL: width, alignItems: 'center', marginVertical: 20}}>
                <Text style={{fontWeight: '700'}} h3>Đăng nhập</Text>
            </View>
            <View style={{marginHorizontal: 20}}>
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
                <Button 
                    title="Đăng nhập"
                    type="outline" 
                    titleStyle={styles.textButton}
                    style={[styles.button, {backgroundColor: '#4b0082'}]}
                />
                {/* <Button 
                    title="Đăng nhập"
                    type="outline" 
                    titleStyle={styles.textButton}
                    style={[styles.button, {backgroundColor: '#4b0082', marginTop: 40, paddingVertical:5}]}
                /> */}
                <Button 
                    title="Facebook"
                    type="outline" 
                    iconPosition="left"
                    icon={<Icon name="facebook-square" size={22} color={'#FFF'} />}
                    titleStyle={styles.textButton}
                    style={[styles.button, {backgroundColor: '#1877f2'}]}
                 />
                <Button 
                    title="Google"
                    type="outline" 
                    iconPosition="left"
                    icon={<Icon name="google" size={22} color={'#FFF'} />}
                    titleStyle={styles.textButton}
                    style={[styles.button, {backgroundColor: '#ea4335'}]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
        paddingVertical:5
    },
    button: {
        marginTop: 20,
    }
});

export default FormLogin;