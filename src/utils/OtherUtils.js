/**
 * Created by liaoye on 2017/3/10.
 */

let OtherUtils = {
    /**
     * 检查输入的价格是否合规
     * @param money
     * @returns {boolean}
     */
    checkPrice(money){
        var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        return reg.test(money);
    },

    /**
     * 对象的深拷贝
     * @param source
     * @returns {*}
     */
    deepCopy:function (source) {
        var k, ret= source, b;
        if(source && ((b = (source instanceof Array)) || source instanceof Object)) {
            ret = b ? [] : {};
            for(k in source){
                if(source.hasOwnProperty(k)){
                    ret[k] = this.deepCopy(source[k]);
                }
            }
        }
        return ret;
    },

    /**
     * 检查是否为数值
     * @param val
     * @returns {boolean}
     */
    isNumber(val){
        if(!val || isNaN(Number(val))){
            return false
        }else{
            return true
        }
    },


    /**
     * 判断输入的值是否为正整数和0
     * @param val
     * @returns {boolean}
     */
    checkInteger(val){
        var reg= /^[0-9]+$/;
        return reg.test(val)
    },

    /**
     * 判断输入的值是否为正整数
     * @param val
     * @returns {boolean}
     */
    checkIntNum(val){
        var reg = /^[0-9]*[1-9][0-9]*$/;
        return reg.test(val)
    }


};
export default OtherUtils;
