/**
 * Created by xiaoming on 2017/6/2.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    PixelRatio,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatarSource: null,
            videoSource: null
        }
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            title:'选择图片',
            takePhotoButtonTitle:'相机',
            chooseFromLibraryButtonTitle:'图库',
            cancelButtonTitle:'取消',
            customButtons: [
                {name: '其他按钮', title: '其他按钮1'},
                {name: '其他按钮', title: '其他按钮2'},
            ],
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                // You can display the image using either:
                source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // Or:
                // if (Platform.OS === 'android') {
                //   source = {uri: response.uri, isStatic: true};
                // } else {
                //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
                // }

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            chooseFromLibraryButtonTitle:'',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render(){
        return(
            <View style={{flex: 1,backgroundColor: Theme.bgColor}}>
                <TouchableOpacity onPress={()=>this.selectPhotoTapped()}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.selectVideoTapped()}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>Select a Video</Text>
                    </View>
                </TouchableOpacity>

                {
                    this.state.videoSource &&
                        <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
});
