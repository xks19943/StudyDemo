/**
 * Created by xiaoming on 2017/6/2.
 *
 */
import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
/**
 * 虚线
 * 使用方法
 * <DashLine isVertical={true} height={100} lineColor={}/>
 * <DashLine isVertical={false} width={100}/>
 *
 */
export default class DashLine extends Component {



    constructor(props){
        super(props);

    }


    render() {
        var len = Math.ceil(this.props.isVertical ? this.props.height / 10 : this.props.width / 10);
        var arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(i);
        }

        return <View style={{
            flexDirection: this.props.isVertical ? 'column' : 'row',
            width: this.props.width
        }}>
            {
                arr.map((item, index) => {
                    return (
                        this.props.isVertical ?
                            <Text style={{
                                width: getSmallDP(0.5),
                                height: 2,
                                marginBottom: 2,
                                flex: 1,
                                backgroundColor: this.props.lineColor ? this.props.lineColor : '#999'
                            }} key={'dash' + index}> </Text>
                            :
                            <Text style={{
                                height: getSmallDP(0.5),
                                width: 2,
                                marginRight: 2,
                                flex: 1,
                                backgroundColor: this.props.lineColor ? this.props.lineColor : '#999'
                            }} key={'dash' + index}> </Text>);
                })
            }
        </View>
    }
}