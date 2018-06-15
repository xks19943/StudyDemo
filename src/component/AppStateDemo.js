/**
 * Created by liaoye on 2016/8/16.
 * 学习使用Appstate api
 */
import React,{Component} from 'react';
import {
    Text,
    AppState,
} from 'react-native';

export default class AppStateDemo extends Component{
    constructor(props){
        super(props)
        console.log('状态1',AppState.currentState);
        this.state={currentAppState: AppState.currentState}
    }

    render(){
        return(
            <Text>当前app的状态是:{this.state.currentAppState}</Text>
        );
    }

    componentWillMount(){
        console.log('状态2',AppState.currentState);
    }

    //当组件渲染完成的时候
    componentDidMount() {
        AppState.addEventListener('change',this.handleChangeAppState);
    }

    //当组件移除的时候
    componentWillUnmount() {
        AppState.removeEventListener('change',this.handleChangeAppState);
    }

    handleChangeAppState = ()=>{
        console.log('状态3',AppState.currentState);
        this.setState({currentAppState:AppState.currentState});
    }
}