/**
 * Created by xiaoming on 2017/8/22.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native';
import CustomButton from '../component/CustomButton';

export default class DrawerLayoutAndroidDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderNavigationView(){
    return(
      <View style={styles.container}>
        <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
          我是菜单页面
        </Text>
        <CustomButton
          text='关闭抽屉'
          onPress={()=>{
            this.drawer.closeDrawer();
          }}/>
      </View>
    )
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(drawer)=>this.drawer = drawer}
        drawerWidth={240}
        //设置划出方向
        drawerPosition={DrawerLayoutAndroid.positions.right}
        //设置抽屉的渲染布局
        renderNavigationView={() => this.renderNavigationView()}>
          <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
            DrawerLayoutAndroid示例
          </Text>
          <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
            右边屏幕左滑滑出菜单
          </Text>
          <CustomButton
            text='打开抽屉'
            onPress={()=>{
              this.drawer.openDrawer();
            }}/>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});