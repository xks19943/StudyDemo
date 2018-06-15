/**
 * Created by 明明 on 2017/5/3.
 */

import { StackNavigator } from 'react-navigation';
import './src/global/Global';
import HomeScreen from './src/HomeScreen';
import ChatScreen from './src/ChatScreen';
import MainScreen from './src/MainScreen';

import AlertDemo from './src/component/AlertDemo';
import AppStateDemo from './src/component/AppStateDemo';
import ARTDemo from './src/component/ARTDemo';
import ActivityIndicatorDemo from './src/component/ActivityIndicatorDemo';
import AsyncStorageDemo from './src/component/AsyncStorageDemo';
import ButtonDemo from './src/component/ButtonDemo';
import FetchDemo from './src/component/FetchDemo';
import FlatListDemo from './src/component/FlatListDemo';
import ListViewDemo from './src/component/ListViewDemo';
import ClipboardDemo from './src/component/ClipboardDemo';
import DatePickerAndroidDemo from './src/component/DatePickerAndroidDemo';
import DeviceEventEmitterDemo from './src/component/DeviceEventEmitterDemo';
import DimensionDemo from './src/component/DimensionDemo';
import LinkingDemo from './src/component/LinkingDemo';
import PermissionAndroidDemo from './src/component/PermissionAndroidDemo';
import PickerDemo from './src/component/PickerDemo';
import SliderDemo from './src/component/SliderDemo';
import DrawerLayoutAndroidDemo from './src/component/DrawerLayoutAndroidDemo';
import ViewPagerAndroidDemo from './src/component/ViewPagerAndroidDemo';
import ScrollAndListDemo from './src/component/ScrollAndListDemo';

import ImagePickerTest from './src/wheel/ImagePickerTest';
import DeviceInfoTest from './src/wheel/DeviceInfoTest';
import MyToastTest from './src/wheel/MyToastTest';
import MyDialogTest from './src/wheel/MyDialogTest';
import MyProgressDialogTest from './src/wheel/MyProgressDialogTest';
//import BaiDuMapTest from './src/wheel/BaiDuMapTest';
import CameraTest from './src/wheel/CameraTest';
import DateTimePickerTest from './src/wheel/DateTimePickerTest';


const App = StackNavigator({
  Main: { screen: MainScreen },
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },


  AlertDemo: { screen: AlertDemo},
  AppStateDemo: { screen: AppStateDemo},
  ARTDemo:{screen:ARTDemo},
  ActivityIndicatorDemo: { screen: ActivityIndicatorDemo},
  AsyncStorageDemo: { screen: AsyncStorageDemo},
  ButtonDemo: {screen: ButtonDemo},
  ClipboardDemo: {screen: ClipboardDemo},
  DatePickerAndroidDemo: {screen: DatePickerAndroidDemo},
  DrawerLayoutAndroidDemo:{screen:DrawerLayoutAndroidDemo},
  DeviceEventEmitterDemo: {screen: DeviceEventEmitterDemo},
  DimensionDemo: {screen: DimensionDemo},
  FetchDemo: {screen: FetchDemo},
  PermissionAndroidDemo: {screen: PermissionAndroidDemo},
  PickerDemo: {screen: PickerDemo},
  SliderDemo: {screen: SliderDemo},
  FlatListDemo: {screen: FlatListDemo},
  ListViewDemo:{screen: ListViewDemo},
  LinkingDemo: {screen: LinkingDemo},

  ScrollAndListDemo: {screen: ScrollAndListDemo},
  ViewPagerAndroidDemo:{screen:ViewPagerAndroidDemo},



  ImagePickerTest: {screen: ImagePickerTest},
  DeviceInfoTest: {screen: DeviceInfoTest},
  MyToastTest: {screen: MyToastTest},
  MyDialogTest: {screen: MyDialogTest},
  MyProgressDialogTest: {screen: MyProgressDialogTest},
  CameraTest: { screen: CameraTest },
  DateTimePickerTest: { screen: DateTimePickerTest},
},{
  initialRouteName:'Main',
  initialRouteParams:{name:'StudyDemo'},
  navigationOptions:({navigation}) => {
    let {state,goBack} = navigation;
    // 用来判断是否隐藏或显示header
    console.log(navigation)
    return {
      headerTitle:`${state.params.name}`,
      headerStyle :{
        backgroundColor:Theme.primaryColor
      },
      headerTitleStyle:{
        fontSize:FontSize.large,
        color:Theme.whiteColor
      }
    }
  }
});

export default App;