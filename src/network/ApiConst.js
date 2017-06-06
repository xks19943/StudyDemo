/**
 * Created by leung on 2016/9/29.
 */

const DEVELOP = 1; // 开发版
const TEST = 2; // 测试版
const PRODUCT = 3; // 生产版
/**
 *    这里是服务器版本切换，下面是开发版，
 *    切换到测试版 var developeType = DEVELOP;
 */
var developType = TEST;
let ApiConst = {
    DEVELOP: {
        /**
         * 网址都写在这里,如下
         */
        yoorstore: "http://channeldev.sunaw.com:35/sw_channelshop_api"
    },
    TEST: {
        /**
         * 网址都写在这里,如下
         */
        yoorstore: 'http://channeltest.sunaw.com:35/sw_channelshop_api'
    },
    PRODUCT: {
        /**
         * 网址都写在这里,如下
         */
        yoorstore: "http://www.sunaw.com/product",
    },

    Versions()
    {
        switch (developType) {
            case DEVELOP:
                return ApiConst.DEVELOP;
            case TEST:
                return ApiConst.TEST;
            case PRODUCT:
                return ApiConst.PRODUCT;
        }
    }
};

export default ApiConst;
