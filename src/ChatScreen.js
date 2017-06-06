/**
 * Created by 明明 on 2017/5/3.
 */
import React,{ Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

export default class ChatScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
                />
            ),
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log('navigation',this.props.navigation);
        return (
            <View>
                <Text>Chat with {params.user}</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('BaiDu')}
                    title="BaiDuMapDemo"/>
            </View>
        );
    }
}