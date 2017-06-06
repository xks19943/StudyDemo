/**
 * Created by 明明 on 2017/5/10.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ComponentList from './ComponentList';
import WheelList from './WheelList';

const MainScreenNavigator  =  TabNavigator({
    Component: { screen: ComponentList },
    Wheel: { screen: WheelList }
},{
    tabBarPosition:'Top',
    tabBarOptions: {
        style: {
            height:44,
            backgroundColor:Theme.primaryColor
        },
        activeTintColor:Theme.whiteColor,
        inactiveTintColor:Theme.whiteColor,
        indicatorStyle:{
            backgroundColor:Theme.whiteColor
        }
    }
});

export default MainScreenNavigator;