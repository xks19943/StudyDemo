/**
 * Created by xiaoming on 2017/6/6.
 * 学习使用FlatList
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import ItemCell from './ItemCell';

export default class FlatListDemo extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            selected: (new Map(): Map<string, boolean>),
            isRefreshing:false,
          dataList:[]
        };
    }


    onPressItem(id) {
        // updater functions are preferred for transactional updates
        const selected = new Map(this.state.selected);
        selected.set(id, !selected.get(id)); // toggle
        console.log(selected.get(id)+'哈哈');
        console.log(...selected);

        this.setState({
            selected:selected
        })
    }

    onRefresh(){
        console.log('调用了这个方法');
       this.setState({
            isRefreshing:true
        });
        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
        },3000)
    }

  componentDidMount() {
    let data = [];
    for (let i=0;i<3000;i++){
      data.push({title:'旧梦不须记----'+i})
    }
    this.setState({
      dataList:data
    })
  }

    render(){
        return(
            <View style={{flex:1, backgroundColor:Theme.bgColor}}>
                <FlatList
                    style={{flex:1, backgroundColor:Theme.bgColor}}
                    data={this.state.dataList}
                    extraData={this.state}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item,index})=>this.renderItemCell({item,index})}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    onRefrsh={()=>this.onRefresh()}
                    legacyImplementation={true}
                    refreshing={this.state.isRefreshing}/>
            </View>
        )
    }

    /**
     * 设置分割线
     */
    renderItemSeparator(){
        return(
            <View style={{height: 5,width: ScreenWidth,backgroundColor: Theme.diverColor}}/>
        )
    }

    renderItemCell({item,index}){
        return(
            <MyListItem
                id={index}
                onPressItem={(id)=>this.onPressItem(id)}
                selected={this.state.selected.get(index)}
                title={item.title}/>
        )
    }
}

class MyListItem extends React.PureComponent {
    render() {
        return (
            <ItemCell
                icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                children={this.props.title}
                showDisclosureIndicator={this.props.selected}
                onPress={()=>this.props.onPressItem(this.props.id)}/>
        )
    }
}