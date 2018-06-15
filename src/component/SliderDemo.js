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
  Slider
} from 'react-native';

export default class SliderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{width:ScreenWidth}}
          value={0.2}
          step={0.1}
          maximumTrackTintColor={Theme.primaryDarkColor}
          minimumTrackTintColor={Theme.primaryColor}
          onSlidingComplete={(val)=>{
            console.log('用户结束滑块滑动时'+val);
          }}
          onValueChange={(value) => {
            console.log('滑块进度改变'+value);
            this.setState({value: value})
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