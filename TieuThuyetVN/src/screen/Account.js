import React, { Component } from 'react';
import { Button, Input, ListItem, Text, Avatar } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Account = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{width: width, height: 220, justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                    rounded
                    size="xlarge"
                    containerStyle={{ borderColor: 'gray', borderWidth: 1, shadowOpacity: 1, shadowOffset: {width: 0, height: 0}, shadowColor:'#4b0082' }}
                    source={{
                        uri:
                        'https://lh3.googleusercontent.com/a-/AOh14GjaSndsvqQJrkA1PphufS0S0AP62yXx45gKQLgJxA=s96-c',
                    }}
                    >
                    <Avatar.Accessory size={36}/>
                </Avatar>
                <Text h4 h4Style={{fontWeight: 'bold', marginTop: 10}}>Võ Minh Tân </Text>
            </View>
            <View style={{flex: 1}}>
                <ListItem bottomDivider>
                    <Icon name='account-multiple' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Cấp bậc: Thành Viên</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='email' size={24} />
                    <ListItem.Content>
                    <ListItem.Title numberOfLines={1} >tanminhvo12340@gmail.com</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='clock-time-five' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Tham gia 3 tháng trước</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='eye' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Danh sách truyện đã xem</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='heart-multiple' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Danh sách truyện yêu thích</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='key-change' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Đổi mật khẩu</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name='logout' size={24} />
                    <ListItem.Content>
                    <ListItem.Title>Đăng xuất</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default Account;