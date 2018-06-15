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
  Picker
} from 'react-native';

export default class PickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:'JavaScript',
      message:'haha'
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          //设置展示的方式为向下
          mode={'dropdown'}
          prompt={'请选择语言'}
          //设置选中的状态的初始值
          selectedValue={this.state.language}
          //当选中的时候改变对应的值
          onValueChange={(lang, position) => this.setState({language: lang})}>
          <Picker.Item label={'Java'} value={'java'}/>
          <Picker.Item label={'JavaScript'} value={'JavaScript'}/>
        </Picker>

        <Picker
          //设置展示的方式为向下
            mode={'dialog'}
            prompt={'请选择语言'}
            //设置选中的状态的初始值
            selectedValue={this.state.message}
            //当选中的时候改变对应的值
            onValueChange={(lang, position) => this.setState({message: lang})}>
            <Picker.Item label={'嘻嘻'} value={'xixi'}/>
            <Picker.Item label={'哈哈'} value={'haha'}/>
        </Picker>
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