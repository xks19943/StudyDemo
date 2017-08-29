/**
 * Created by xiaoming on 2017/8/23.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ViewPagerAndroid
} from 'react-native';



export default class ViewPagerAndroidDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
  ];

  //页面切换
  onPageScroll(e){
    console.log('onPageScroll',e);
  }

  //页面状态的改变
  onPageScrollStateChanged(e){
    console.log('onPageScrollStateChanged',e);
  }

  //页面切换完成
  onPageSelected(e){
    console.log('onPageSelected',e);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }


  render() {
    return (
      <ViewPagerAndroid
        style={styles.container}
        initialPage={0}
        scrollEnabled={true}
        onPageScroll={(e)=>this.onPageScroll(e.nativeEvent)}
        onPageScrollStateChanged={(state)=>this.onPageScrollStateChanged(state)}
        onPageSelected={(e)=>this.onPageSelected(e.nativeEvent)}
        keyboardDismissMode={'on-drag'}>
        {this.renderPager()}
      </ViewPagerAndroid>
    )
  }

  renderPager(){
    return(
      this.IMAGE_URIS.map((url,index)=>{
        return(
          <View key={index}>
            <Image
              style={styles.img}
              source={{uri:url}}/>
          </View>
        )
      })
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  img:{
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: 'cover'
  }
});