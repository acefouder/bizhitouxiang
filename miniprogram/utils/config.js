/**
 * 打赏二维码
 */
var moneyUrl ="https://627a-bzh-ja00c-1301572904.tcb.qcloud.la/zs.jpg?sign=eee788ec1803ac6d3f7dc58215271909&t=1584377206"

/**
 * 公众号二维码
 */
var wechatUrl ="https://627a-bzh-ja00c-1301572904.tcb.qcloud.la/gzh.jpg?sign=997c2d1277b01e78867e3259694a3bb3&t=1584375960"

/**
 * 云开发环境
 */
var env ="bzh-ja00c"
//var env ="test-91f3af"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

var subcributeTemplateId ="Qgk1M2wnICo_2GtuY6z-6r7_fqNlPmTDRdlpVEzXRE8"

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env,
    subcributeTemplateId:subcributeTemplateId
}