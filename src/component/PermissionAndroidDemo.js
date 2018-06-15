/**
 * Created by xiaoming on 2017/8/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  PermissionsAndroid,
  ToastAndroid
} from 'react-native';
import CustomButton from './CustomButton';

export default class PermissionAndroidDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  async requestCameraPermission(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': '申请相机权限',
          'message': '一个很牛逼的应用想借用你的摄像头，' +
          '然后你就可以拍出酷炫的皂片啦。'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ToastAndroid.show('申请相机头权限成功',ToastAndroid.SHORT);
      } else if(granted === PermissionsAndroid.RESULTS.DENIED){
        ToastAndroid.show('拒绝了相机权限申请',ToastAndroid.SHORT);
      }else if(granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN){
        ToastAndroid.show('永久拒绝了相机权限的申请',ToastAndroid.SHORT);
        //为此 你需要引导客户进入应用的设置页面去开启相机权限
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton
          text='点击申请相机权限'
          onPress={()=>{
            this.requestCameraPermission()
          }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});