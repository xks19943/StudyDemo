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
  {name:'AlertDemo'},
  {name:'AppStateDemo'},
  {name:'ARTDemo'},
  {name:'ActivityIndicatorDemo'},
  {name:'AsyncStorageDemo'},
  {name:'ButtonDemo'},
  {name:'ClipboardDemo'},
  {name:'DatePickerAndroidDemo'},
  {name:'DimensionDemo'},
  {name:'DeviceEventEmitterDemo'},
  {name:'DrawerLayoutAndroidDemo'},
  {name:'FetchDemo'},
  {name:'FlatListDemo'},
  {name:'ListViewDemo'},
  {name:'PermissionAndroidDemo'},
  {name:'PickerDemo'},
  {name:'SliderDemo'},
  {name:'ScrollAndListDemo'},
  {name:'ViewPagerAndroidDemo'}
    /*{name:'DrawerLayoutAndroid'},
    {name:'LayoutAnimation'},
    {name:'ListView'},
    {name:'Modal'},
    {name:'NetInfo'},
    {name:'Picker'},
    {name:'PixelPatio'},
    {name:'ProgressBarAndroid'},
    {name:'PullToRefresh'},
    {name:'Props'},
    {name:'Slider'},
    {name:'Switch'},
    {name:'Timer'},
    {name:'ToastAndroid'},
    {name:'ToolBarAndroid'},
    {name:'Vibration'},
    {name:'ViewPager'},
    {name:'WebView'},
    {name:'SectionListVIew'},
    {name:'GridView'},
    {name:'ChannelView'},*/
];

export default class ComponentList extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2}).cloneWithRows(data)
        }
    }

    render() {
        return (
            <ListView
                style={{flex: 1,backgroundColor: Theme.bgColor}}
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
        this.props.navigation.navigate(rowData.name,{name:rowData.name})
    }
}