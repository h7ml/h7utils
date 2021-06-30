"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 验证不能包含字母
 * @param { string } value
 */
var isNoWord = function (value) { return /^[^A-Za-z]*$/g.test(value); };
/**
 * 验证中文和数字
 * @param { string } value
 */
var isCHNAndEN = function (value) {
    return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);
};
/**
 * 验证邮政编码(中国)
 * @param { string } value
 */
var isPostcode = function (value) {
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);
};
/**
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param { string } value
 */
var isWeChatNum = function (value) { return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value); };
/**
 * 验证16进制颜色
 * @param { string } value
 */
var isColor16 = function (value) { return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value); };
/**
 * 验证火车车次
 * @param { string } value
 */
var isTrainNum = function (value) { return /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value); };
/**
 * 验证必须带端口号的网址(或ip)
 * @param { string } value
 */
var isHttpAndPort = function (value) {
    return /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);
};
/**
 * 验证网址(支持端口和"?+参数"和"#+参数)
 *  @param { string } value
 */
var isRightWebsite = function (value) {
    return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);
};
/**
 * 验证统一社会信用代码
 *  @param { string } value
 */
var isCreditCode = function (value) {
    return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
};
/**
 * 验证版本号格式必须为X.Y.Z
 *  @param { string } value
 */
var isVersion = function (value) { return /^\d+(?:\.\d+){2}$/g.test(value); };
/**
 * 验证图片链接地址（图片格式可按需增删）
 *  @param { string } value
 */
var isImageUrl = function (value) {
    return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);
};
/**
 * 验证中文姓名
 * @param { string } value
 */
var isChineseName = function (value) { return /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value); };
/**
 * 验证英文姓名
 * @param { string } value
 */
var isEnglishName = function (value) {
    return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
};
/**
 * 验证车牌号(新能源)
 * @param { string } value
 */
var isLicensePlateNumberNER = function (value) {
    return /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);
};
/**
 * 验证车牌号(非新能源)
 * @param { string } value
 */
var isLicensePlateNumberNNER = function (value) {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);
};
/**
 * 验证车牌号(新能源+非新能源)
 * @param { string } value
 */
var isLicensePlateNumber = function (value) {
    return /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);
};
/**
 * 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 * @param { string } value
 */
var isMPStrict = function (value) {
    return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);
};
/**
 * 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param { string } value
 */
var isMPRelaxed = function (value) { return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value); };
/**
 * 验证email(邮箱) 收录自 有赞 vant 的 https://github.com/youzan/vant/blob/2.x/src/utils/validate/email.ts
 * @param { string } value
 */
var isEmail = function (value) {
    var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return reg.test(value);
};
/**
 * 验证座机电话(国内),如: 0341-86091234
 * @param { string } value
 */
var isLandlineTelephone = function (value) { return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value); };
/**
 * 验证护照（包含香港、澳门）
 * @param { string } value
 */
var isPassport = function (value) {
    return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);
};
/**
 * 验证中文/汉字
 * @param { string } value
 */
var isChineseCharacter = function (value) {
    return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);
};
/**
 * 验证小数
 * @param { string } value
 */
var isDecimal = function (value) { return /^\d+\.\d+$/g.test(value); };
/**
 * 是否为整数
 * @param {*} number
 * @return {Boolean}
 */
var isInteger = function (number) {
    return typeof number === 'number' && !isNaN(number) && number % 1 === 0;
};
/**
 * 验证数字
 * @param { string } value
 */
var isNumberStr = function (value) { return /^\d{1,}$/g.test(value); };
/**
 *
 * 验证qq号格式
 * @param { string } value
 */
var isQQNum = function (value) { return /^[1-9][0-9]{4,10}$/g.test(value); };
/**
 * 验证数字和字母组成
 * @param { string } value
 */
var isNumAndStr = function (value) { return /^[A-Za-z0-9]+$/g.test(value); };
/**
 * 验证英文字母
 * @param { string } value
 */
var isEnglish = function (value) { return /^[a-zA-Z]+$/g.test(value); };
/**
 * 验证大写英文字母
 * @param { string } value
 */
var isCapital = function (value) { return /^[A-Z]+$/g.test(value); };
/**
 * 验证小写英文字母
 * @param { string } value
 */
var isLowercase = function (value) { return /^[a-z]+$/g.test(value); };
/**
 * 验证手机机身码(IMEI)
 * @param { string } value
 */
var isIMEI = function (value) { return /^\d{15,17}$/g.test(value); };
/**
 * 验证统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
 * @param { string } value
 */
var isCreditCode2 = function (value) {
    return /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/g.test(value);
};
/**
 * 验证迅雷链接
 * @param { string } value
 */
var isXunleiUrl = function (value) { return /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value); };
/**
 * 验证ed2k链接(宽松匹配)
 * @param { string } value
 */
var isEd2kUrl = function (value) { return /^ed2k:\/\/\|file\|.+\|\/$/g.test(value); };
/**
 * 验证磁力链接
 * @param { string } value
 */
var isMagnetUrl = function (value) {
    return /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
};
/**
 * 验证子网掩码
 * @param { string } value
 */
var isMask = function (value) {
    return /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);
};
/**
 * 验证linux"隐藏文件"路径
 * @param { string } value
 */
var isLinuxHiddenPath = function (value) { return /^\/(?:[^/]+\/)*\.[^/]*/g.test(value); };
/**
 * 验证linux文件夹路径
 * @param { string } value
 */
var isLinuxFolderPath = function (value) { return /^\/(?:[^/]+\/)*$/g.test(value); };
/**
 * 验证linux文件路径
 * @param { string } value
 */
var isLinuxFilePath = function (value) { return /^\/(?:[^/]+\/)*[^/]+$/g.test(value); };
/**
 * 验证window"文件夹"路径
 * @param { string } value
 */
var isWindowFolderPath = function (value) { return /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value); };
/**
 * 验证window文件路径
 * @param { string } value
 */
var isWindowFilePath = function (value) {
    return /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);
};
/**
 * 验证股票代码(A股)
 * @param { string } value
 */
var isStockCode = function (value) {
    return /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);
};
/**
 * 验证html注释
 * @param { string } value
 */
var isHtmLComment = function (value) { return /^<!--[\s\S]*?-->$/g.test(value); };
/**
 * 验证md5格式(32位)
 * @param { string } value
 */
var isMd532 = function (value) { return /^([a-f\d]{32}|[A-F\d]{32})$/g.test(value); };
/**
 * 验证GUID/UUID
 * @param { string } value
 */
var isGuid = function (value) {
    return /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/g.test(value);
};
/**
 * 验证视频(video)链接地址
 * @param { string } value
 */
var isVideoUrl = function (value) {
    return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/g.test(value);
};
/**
 * 验证24小时制时间（HH:mm:ss）
 * @param { string } value
 */
var is24HourTime = function (value) {
    return /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/g.test(value);
};
/**
 * 验证12小时制时间（hh:mm:ss）
 * @param { string } value
 */
var is12HourTime = function (value) {
    return /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/g.test(value);
};
/**
 * 验证base64格式'
 * @param { string } value
 */
var isBase64 = function (value) {
    return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/g.test(value);
};
/**
 * 验证数字/货币金额（支持负数、千分位分隔符）
 * @param { string } value
 */
var isCurrency = function (value) { return /^-?\d+(,\d{3})*(\.\d{1,2})?$/g.test(value); };
/**
 * 验证数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 * @param { string } value
 */
var isCurrency2 = function (value) {
    return /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/g.test(value);
};
/**
 * 验证银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 * @param { string } value
 */
var isBankCard = function (value) { return /^[1-9]\d{9,29}$/g.test(value); };
/**
 * 验证date(日期)
 * @param { string } value
 */
var isDate = function (value) {
    return /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/g.test(value);
};
/**
 * 验证身份证号(1代,15位数字)
 * @param { string } value
 */
var isIdCard1 = function (value) {
    return /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/g.test(value);
};
/**
 * 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @param { string } value
 */
var isIdCard2 = function (value) {
    return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
};
/**
 * 验证身份证号, 支持1/2代(15位/18位数字)
 * @param { string } value
 */
var isIdCard = function (value) {
    return /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);
};
/**
 * 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
 * @param { string } value
 */
var isAccount = function (value) { return /^[a-zA-Z]\w{4,15}$/g.test(value); };
/**
 * 验证html标签(宽松匹配)
 * @param { string } value
 */
var isHtmlTag = function (value) { return /<(\w+)[^>]*>(.*?<\/\1>)?/g.test(value); };
/**
 * 验证用户名校验，4到16位（字母，数字，下划线，减号）
 * @param { string } value
 */
var isUsername = function (value) { return /^[a-zA-Z0-9_-]{4,16}$/g.test(value); };
/**
 * 验证ip-v4[:端口]
 * @param { string } value
 */
var isIpv4 = function (value) {
    return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/g.test(value);
};
/**
 * 验证ip-v6[:端口]
 * @param { string } value
 */
var isIpv6 = function (value) {
    return /^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))|\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/g.test(value);
};
/**
 * 验证java包名
 * @param { string } value
 */
var isJvavaPackName = function (value) {
    return /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/g.test(value);
};
/**
 * 验证香港身份证
 * @param { string } value
 */
var isHKIdCard = function (value) { return /^[a-zA-Z]\d{6}\([\dA]\)$/g.test(value); };
/**
 * 验证澳门身份证
 * @param { string } value
 */
var isMacauIdCard = function (value) { return /^[1|5|7]\d{6}[(\d)]{3}$/g.test(value); };
/**
 * 验证台湾身份证
 * @param { string } value
 */
var isTWIdCard = function (value) { return /^[a-zA-Z][0-9]{9}$/g.test(value); };
exports.default = {
    isNoWord: isNoWord,
    isCHNAndEN: isCHNAndEN,
    isPostcode: isPostcode,
    isWeChatNum: isWeChatNum,
    isColor16: isColor16,
    isTrainNum: isTrainNum,
    isHttpAndPort: isHttpAndPort,
    isRightWebsite: isRightWebsite,
    isCreditCode: isCreditCode,
    isVersion: isVersion,
    isImageUrl: isImageUrl,
    isChineseName: isChineseName,
    isEnglishName: isEnglishName,
    isLicensePlateNumberNER: isLicensePlateNumberNER,
    isLicensePlateNumberNNER: isLicensePlateNumberNNER,
    isLicensePlateNumber: isLicensePlateNumber,
    isMPStrict: isMPStrict,
    isMPRelaxed: isMPRelaxed,
    isEmail: isEmail,
    isLandlineTelephone: isLandlineTelephone,
    isPassport: isPassport,
    isChineseCharacter: isChineseCharacter,
    isDecimal: isDecimal,
    isInteger: isInteger,
    isNumberStr: isNumberStr,
    isQQNum: isQQNum,
    isNumAndStr: isNumAndStr,
    isEnglish: isEnglish,
    isCapital: isCapital,
    isLowercase: isLowercase,
    isIMEI: isIMEI,
    isCreditCode2: isCreditCode2,
    isXunleiUrl: isXunleiUrl,
    isEd2kUrl: isEd2kUrl,
    isMagnetUrl: isMagnetUrl,
    isMask: isMask,
    isLinuxHiddenPath: isLinuxHiddenPath,
    isLinuxFolderPath: isLinuxFolderPath,
    isLinuxFilePath: isLinuxFilePath,
    isWindowFolderPath: isWindowFolderPath,
    isWindowFilePath: isWindowFilePath,
    isStockCode: isStockCode,
    isHtmLComment: isHtmLComment,
    isMd532: isMd532,
    isGuid: isGuid,
    isVideoUrl: isVideoUrl,
    is24HourTime: is24HourTime,
    is12HourTime: is12HourTime,
    isBase64: isBase64,
    isCurrency: isCurrency,
    isCurrency2: isCurrency2,
    isBankCard: isBankCard,
    isDate: isDate,
    isIdCard1: isIdCard1,
    isIdCard2: isIdCard2,
    isIdCard: isIdCard,
    isAccount: isAccount,
    isHtmlTag: isHtmlTag,
    isUsername: isUsername,
    isIpv4: isIpv4,
    isIpv6: isIpv6,
    isJvavaPackName: isJvavaPackName,
    isHKIdCard: isHKIdCard,
    isMacauIdCard: isMacauIdCard,
    isTWIdCard: isTWIdCard,
};
//# sourceMappingURL=index.js.map