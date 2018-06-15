/**
 * Created by xiaoming on 2017/6/2.
 */
import React, {Component} from 'react';
import {
    Modal,
    BackAndroid
} from 'react-native';
/**
 * 使用方法如下，所有Modal属性都可以使用
 *
 *
 * 打开Modal this.refs['baseModal'].open();
 *
 *
 <BaseModal
 ref="baseModal"
 transparent={true}
 animationType={'fade'}>
     <TouchableOpacity
         style={{backgroundColor: '#fff', flexDirection: 'row'}}
         onPress={() => {
                         this.refs['baseModal'].close();
                       }}>
         <Text>android test back</Text>
         </TouchableOpacity>
 </BaseModal>
 *
 *
 *
 *
 *
 *
 *
 */
export default class BaseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <Modal
                {...this.props}
                visible={this.state.visible}
                onRequestClose={() => {
                    if (this.state.visible) {
                        this.close();
                    }
                    this.props.onRequestClose && this.props.onRequestClose();
                }}>
                {this.props.children}
            </Modal>
        );
    }

    open() {
        this.setState({
            visible: true
        });
    }

    close() {
        this.setState({
            visible: false
        });
    }
}