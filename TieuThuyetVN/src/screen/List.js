import React, { Component } from 'react';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import { StyleSheet, Dimensions, View, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tooltip from 'rn-tooltip';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const list = [
    {
        name: 'Tác giả',
        navigator: 'asdasdas',
        icon: 'account-cowboy-hat'
    },
    {
        name: 'Truyện HOT',
        navigator: 'asdasdas',
        icon: 'fire'
    },
    {
        name: 'Truyện mới cập nhật',
        navigator: 'asdasdas',
        icon: 'archive-arrow-up'
    },
    {
        name: 'Truyện đã hoàn thành',
        navigator: 'asdasdas',
        icon: 'text-box-check'
    },
    {
        name: 'Truyện đã xem',
        navigator: 'asdasdas',
        icon: 'eye'
    },
    {
        name: 'Truyện yêu thích',
        navigator: 'asdasdas',
        icon: 'heart-multiple'
    },
    {
        name: 'Truyện được yêu thích nhất',
        navigator: 'asdasdas',
        icon: 'account-heart'
    },
    {
        name: 'Tác giả',
        navigator: 'asdasdas',
        icon: ''
    },
];  

const List = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => console.log(1)}>
                    <Icon name={l.icon} size={24} />
                    <ListItem.Content>
                        <ListItem.Title style={{fontSize: 20, fontWeight: 'bold'}}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron></ListItem.Chevron>
                </ListItem>
                ))
            }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});

export default List;