/**
 * Created by xiaoming on 2017/8/9.
 * 学习使用ART在RN上绘图案例
 * Android默认就包含ART库，IOS需要单独添加依赖库
 * 地址：https://github.com/xu-duqing/React-Native-ART-Sample
 * 可以自己查看源码
 *
 * path:
 *    moveTo:起点移动,
 *    lineTo:画直线
 *    close:封闭路径
 *    arc：绘制扇形,
 *    curveTo:绘制曲线
 */
import React,{Component} from 'react';
import {
  ART,
  View,
  StyleSheet,
  Text
} from 'react-native';
const {Surface,Shape,Path,Group,ClippingRectangle}  = ART;

export default class ARTDemo extends Component{
  render(){
    const linePath = Path();
    linePath.moveTo(10,20); //将起始点移动到(1,1) 默认(0,0)
    linePath.lineTo(300,20); //连线到目标点(300,1)

    const dashLinePath = Path();
    dashLinePath.moveTo(10,100);
    dashLinePath.lineTo(300,100);


    const rectPath =Path()
      .moveTo(10,150)
      .lineTo(300,150)
      .lineTo(300,250)
      .lineTo(10,250)
      .close();   //close的意思是创建一个密闭的路径

    const curveLinePath = Path()
      .moveTo(10,300)
      .curveTo(0.25, 0.1, 0.25, 0.1,300,300); //绘制贝塞尔曲线;

    const circlePath = Path()
      .moveTo(150,300)
      .arc(10,10,25);

    const pathRect = new Path()
      .moveTo(1,1)
      .lineTo(1,99)
      .lineTo(99,99)
      .lineTo(99,1)
      .close();

    const pathCircle = new Path()
      .moveTo(50,1)
      .arc(0,99,25)
      .arc(0,-99,25)
      .close();

    const pathText = new Path()
      .moveTo(40,5)
      .lineTo(40,99);

    return(
      <View style={styles.container}>
        <Surface
          width={ScreenWidth}
          height={ScreenHeight}>
          <Shape
            d={linePath}
            stroke={Theme.primaryColor}
            strokeCap={10}
            strokeWidth={5}/>

          <Shape
            d={dashLinePath}
            stroke={Theme.primaryColor}
            strokeDash={[20,20]}
            strokeWidth={5}/>

          <Shape
            d={rectPath}
            stroke={Theme.primaryColor}
            strokeDash={[10,5]}
            strokeWidth={1}/>

          <Shape
            d={curveLinePath}
            stroke={Theme.primaryColor}
            strokeWidth={5}/>


          <Shape
            d={circlePath}
            stroke={Theme.primaryColor}
            strokeWidth={1}/>


          <Group>
            <Shape d={pathRect} stroke="#000000" fill="#000000" strokeWidth={1}/>
            <Shape d={pathCircle} stroke="#FFFFFF" fill="#FFFFFF" strokeWidth={1}/>
          </Group>

          <ClippingRectangle
            x={150}
            y={150}
            width={150}
            height={150}/>

        </Surface>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Theme.bgColor
  },
})