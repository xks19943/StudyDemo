/**
 * Created by xiaoming on 2017/8/26.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ListView
} from 'react-native';
import SGListView  from 'react-native-sglistview';
import ItemCell from './ItemCell';

export default class ListViewDemo extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid });

    this.state = {
      selected: (new Map(): Map<string, boolean>),
      dataSource:ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    let data = [];
    for (let i=0;i<3000;i++){
      data.push({title:'旧梦不须记----'+i})
    }
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(data)
    })
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


  render() {
    return (
      <ListView
        initialListSize={10}
        pageSize={10}
        style={styles.container}
        stickyHeaderIndices={[]}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowID) => this.renderItemCell(rowData, sectionID, rowID)}
      />
    )
  }

  renderItemCell(rowData, sectionID, rowID){
    return(
      <MyListItem
        id={rowID}
        onPressItem={(id)=>this.onPressItem(rowID)}
        selected={this.state.selected.get(rowID)}
        title={rowData.title}/>
    )
  }
}

class MyListItem extends Component{
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});