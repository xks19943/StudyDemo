/**
 * Created by liaoye on 2016/8/16.
 * 学习使用Dimensions api
 */
import React,{Component} from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';


export  default class DimensionsDemo extends Component {


    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <Text style={styles.instructions}>
                    当前屏幕宽度:{Dimensions.get('window').width}dp;
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕高度:'{Dimensions.get('window').height}dp;
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});