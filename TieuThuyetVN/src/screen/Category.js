import React, { Component } from 'react';
import { Button, Input, ListItem, Text, Tooltip } from 'react-native-elements';
import { StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const list = [
    {
      name: 'Amy Farha',
      description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
      name: 'Chris Jackson',
      description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Amy Farha',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
    {
        name: 'Chris Jackson',
        description: 'Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết Chi tiết'
    },
];  

const Category = () => {
    return (
        <View style={{flex: 1}}>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => console.log(1)}>
                    <ListItem.Content>
                        <ListItem.Title>{l.name} {' '}
                            <Tooltip  height={'auto'} popover={<Text>{l.description}</Text>}>
                                <Icon name="info-circle" size={15} color={'black'} />
                            </Tooltip>
                        </ListItem.Title>
                        <ListItem.Subtitle numberOfLines={1} style={{ color: 'gray' }}>
                            {l.description}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron></ListItem.Chevron>
                </ListItem>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default Category;