/**
 * Created by xiaoming on 2017/8/24.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ListView,
  RefreshControl
} from 'react-native';

export default class ScrollAndListDemo extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isRefreshing:false,
      isScrollRefreshing:false,
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh(){
    this.setState({
      isRefreshing:true
    });

    setTimeout(()=>{
      let data = [];
      for(let i=0; i<20; i++){
        data.push(
          {
            url:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg',
            name:'超级无敌大路飞'
          }
        )
      }
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(data)
      })
    },2000);
  }

  onScrollRefresh(){
    setTimeout(()=>{
      this.setState({
        isScrollRefreshing:false
      })
    },2000)
    this.setState({
      isScrollRefreshing:true
    })
  }

  onContentSizeChange(contentWidth,contentHeight){
    console.log('haha',contentWidth+"---"+contentHeight);
  }

  /*render() {
    return (
      <View style={{flex:1}}>
        <View>
          <ScrollView
            //contentContainerStyle={{height:120}}
            overScrollMode={'never'}
            //onContentSizeChange={(contentWidth,contentHeight)=>{this.onContentSizeChange(contentWidth,contentHeight)}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isScrollRefreshing}
                onRefresh={()=>this.onScrollRefresh()}
                colors={[Theme.primaryTextColor]}/>
            }>
            <View style={{
              backgroundColor:Theme.primaryColor,
              width:ScreenWidth,
              height:120,
            }}/>
          </ScrollView>
        </View>
        <ListView
          enableEmptySections={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={()=>this.onRefresh()}
              colors={[Theme.primaryColor]}/>
          }
          //style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID)=>this.renderItem(rowData, sectionID, rowID)}
          initialListSize={0}/>
      </View>
    )
  }*/

  render() {
    return (
      <ScrollView
        contentContainerStyle={{flex:1}}
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isScrollRefreshing}
            onRefresh={()=>this.onScrollRefresh()}
            colors={[Theme.primaryTextColor]}/>
        }>
          <View style={{flex:1}}>
            <View style={{
              backgroundColor:Theme.primaryColor,
              width:ScreenWidth,
              height:120,
            }}/>
            <View style={{flex:1}}>
              <ListView
                enableEmptySections={true}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={()=>this.onRefresh()}
                    colors={[Theme.primaryColor]}/>
                }
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID)=>this.renderItem(rowData, sectionID, rowID)}
                initialListSize={0}/>
            </View>
          </View>
      </ScrollView>
    )
  }

  renderItem(rowData, sectionID, rowID){
    return(
      <View style={styles.item}>
        <Image
          source={{uri:rowData.url}}
          style={styles.img}/>
        <Text style={styles.title}>
          {rowData.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  item:{
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Theme.whiteColor
  },
  title:{
    fontSize: FontSize.primary,
    color: Theme.primaryTextColor
  },
  img:{
    width: 44,
    height: 44,
    resizeMode: 'cover'
  },
  list:{
    position:'absolute',
    left:0,
    top:0,
    right:0,
    bottom:0,
    zIndex:15
  }
});