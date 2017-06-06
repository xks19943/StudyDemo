/**
 * Created by 明明 on 2017/5/25.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    Button,
    ListView
} from 'react-native';
import ItemCell from './component/ItemCell';

let data = [
    {name:'react-native-image-picker',screen:'ImagePickerTest'},
    {name:'react-native-deviceInfo',screen:'DeviceInfoTest'},
    {name:'react-native-baidu-map',screen:'BaiDuMapTest'},
    {name:'react-native-camera',screen:'CameraTest'},
    {name:'MyToast',screen:'MyToastTest'},
    {name:'MyDialog',screen:'MyDialogTest'},
    {name:'MyProgressDialog',screen:'MyProgressDialogTest'},
    {name:'DateTimePickerTest',screen:'DateTimePickerTest'}

   /* {name:'react-native-checkbox',screen:'ImagePickerTest'},
    {name:'jpush-react-native',screen:'ImagePickerTest'},
    {name:'react-native-picker',screen:'ImagePickerTest'},
    {name:'react-native-simple-radio-button',screen:'ImagePickerTest'},
    {name:'react-native-radio-buttons',screen:'ImagePickerTest'},
    {name:'react-native-tab-navigator',screen:'ImagePickerTest'},
    {name:'react-native-viewpager',screen:'ImagePickerTest'},
    {name:'react-native-wechat',screen:'ImagePickerTest'},
    {name:'react-native-parallax-scroll-view',screen:'ImagePickerTest'},
    {name:'react-native-swipe-list-view',screen:'ImagePickerTest'},
    {name:'react-native-chart',screen:'ImagePickerTest'},
    {name:'react-native-passwordInput',screen:'ImagePickerTest'},
    {name:'react-native-FoldList',screen:'ImagePickerTest'},*/
]

export default class WheelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2}).cloneWithRows(data)
        }
    }

    render() {
        return (
            <ListView
                style={{flex: 1,backgroundColor: '#f2f2f2'}}
                dataSource={this.state.dataSource}
                renderRow={(rowData,sectionData,rowId)=>this.renderItem(rowData,sectionData,rowId)}/>
        )
    }

    renderItem(rowData,sectionData,rowId){
        return(
            <ItemCell
                icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                children={rowData.name}
                showDisclosureIndicator={true}
                onPress={()=>this.onPressItem(rowData)}/>
        )
    }

    onPressItem(rowData){
        this.props.navigation.navigate(rowData.screen,{name:rowData.name})
    }
}