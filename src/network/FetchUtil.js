/**
 * Created by xiaoming on 2017/6/5.
 */

import MyProgressDialog from '../views/MyProgressDialog';
import MyToast from '../views/MyToast';

let TIME_OUT = 30; //设置超时时间
let FetchUtil = {
    /**
     * 转换参数
     */
    toQueryString(obj){
        return obj ? Object.keys(obj).sort().map((key) => {
                var val = obj[key];
                if (Array.isArray(val)) {
                    return val.sort().map(function (val2) {
                        return key + '=' + val2;
                    }).join('&');
                }
                return key + '=' + val;
            }).join('&') : '';
    },

    /**
     * 主要使用
     * POST
     * 参数 - FormData
     * 返回 - Json
     */
    loadingTitle: "加载中",
    async fetchPostJson(url, params) {
        let isDealing = false;
        setTimeout(() => {
            if (!isDealing) {
                isDealing = true;
                let msg = "网络超时";
                MyProgressDialog.cancel();
                MyToast.showToast(msg);
            }
        }, TIME_OUT * 1000);
        console.log("----fetch url---" + url);
        console.log("----fetch params---" + params);
        if (FetchUtil.loadingTitle != 'undefined') {
            MyProgressDialog.show(FetchUtil.loadingTitle);
        }
        try {
            let response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Accept': '*/*',
                        'encoding': 'UTF-8',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    //credentials: 'omit',
                    body: params
                }
            );
            MyProgressDialog.cancel();
            if (!isDealing) {
                isDealing = true;
                let responseJson = await response.json();
                return responseJson;
            }
        } catch(error) {
            if (!isDealing) {
                isDealing = true;
                MyProgressDialog.cancel();
                MyToast.showToast('网络解析错误');
            }
            console.log(error);
        }

    },


    /**
     * GET
     * 参数 - URL上
     * 返回 - Json
     */
     async fetchGetJson(url){
        try {
            if (FetchUtil.loadingTitle != 'undefined') {
                MyProgressDialog.show(FetchUtil.loadingTitle);
            }
            let response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                }
            );
            let responseJson = await response.json();
            MyProgressDialog.cancel();
            console.log(responseJson);
             return responseJson;
        } catch(error) {
            MyProgressDialog.cancel();
            MyToast.showToast('网络解析错误');
            console.error(error);
        }
    },

    /**
     * 上传图片
     * @param url
     */
    async uploadImage(url){
        try {
            MyProgressDialog.show('图片上传中');
            let formData = new FormData();
            formData.append('file', {uri: url, type: 'application/octet-stream'});
            let options = {};
            options.body = formData;
            options.method = 'post';
            options.headers = {
                'Accept': '*/*'
            };

            let response = await fetch(url+'upload', options);
            MyProgressDialog.cancel();
            var bodyText = response._bodyText;
            var start = bodyText.indexOf("\<h1\>MD5:");
            var end = bodyText.indexOf("\<\/h1\>");
            var text = bodyText.substring(start + 8, end);

            return url+text.trim()
        } catch(error){
            MyProgressDialog.cancel();
            MyToast.showToast('图片上传失败');
            console.log(error);
        }

    }
};
export default FetchUtil;
