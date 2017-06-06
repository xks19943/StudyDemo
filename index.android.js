/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import JPushModule from 'jpush-react-native';
import App from './App';
export default class StudyDemo extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    JPushModule.initPush();
    JPushModule.getInfo((info)=>{
      console.log('info',info)
    })
  }

  componentDidMount(){

      //获取自定义的消息
      JPushModule.addReceiveCustomMsgListener((message) => {
          console.log('addReceiveCustomMsgListener',message)
      });

      //获取通知消息
      JPushModule.addReceiveNotificationListener((message) => {
          console.log("receive notification: " + message);
      });

      JPushModule.getRegistrationID((registrationId) => {
          console.log('registrationId',registrationId);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StudyDemo', () => App);
