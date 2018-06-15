/**
 * Created by 明明 on 2017/5/3.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class HomeScreen extends Component{
    render() {
        const { navigate } = this.props.navigation;
        console.log('props',this.props);
        return(
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{ user: 'Lucy' })}
                    title="Chat with Lucy"/>
            </View>
        )
    }
}