/**
 * Created by xiaoming on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from 'react-native';
import GetDeviceInfo from '../utils/GetDeviceInfo';


export default class DevicesInfoTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            deviceInfo:''
        }
    }

    componentDidMount(){
        let info = GetDeviceInfo();
        this.setState({
            deviceInfo:JSON.stringify(info)
        })

    }
    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Text>
                    {this.state.deviceInfo}
                </Text>
            </View>
        )
    }
}