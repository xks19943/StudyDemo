/**
 * Created by leung on 2016/10/18.
 */


import {AsyncStorage} from 'react-native';
const APP_KEY = "S00101";
let BaseParamsUtil = {
    async getParams(){
        let params = {
            appKey: APP_KEY,
            sessionKey: "",
            signMethod: "01",
            timestamp: parseInt(new Date().getTime() / 100),
            version: "1.0",
            sign: "",
            format: 'json'
        };
        try {
            let sessionKey = await AsyncStorage.getItem('sessionKey');
            params.sessionKey = sessionKey;
            return params;
        }catch (error){

        }

    }
}
